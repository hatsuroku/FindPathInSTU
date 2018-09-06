const size = 20;


var g = new Array(size);
var shortest_length; // 最短路长度
var final_path; // 最终路径，第一项为起点，最后一项为终点

function handleData (evt) {
    //alert("fuck2")
    var file = evt.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function (evt) {
        var content = evt.target.result.split(" ");

        // alert(content);
        var cnt = 0;

        // ----------------- build graph
        for (var i = 0; i < g.length; ++i) {
            g[i] = new Array(size);
            g[i][i] = 0;
            for (var j = i + 1; j < g[i].length; ++j) {
                // TODO fill g[i][j] here
                g[i][j] = parseInt(content[cnt++]);
            }
        }
        for (var i = 0; i < g.length; ++i) {
            for (var j = i + 1; j < g[i].length; ++j) {
                g[j][i] = g[i][j];
            }
        }

        //shortest_path(4, [5, 6, 8], 11); // test here
    }
    reader.readAsText(file);
}

// once the file is uploaded, the graph will be built up
document.getElementById('data').addEventListener('change', handleData, false);


var dp;
function DP(n, p, s, imd) {
	if (dp[n][p] >= 0) return dp[n][p];
	if (p === 0) return dp[n][p] = g[s][n];
	dp[n][p] = Number.MAX_VALUE;

	for (const u of imd) {
		if ((p & (1 << u)) !== 0) {
			var tmp = DP(u, p ^ (1 << u), s, imd) + g[u][n];
			if (tmp < dp[n][p]) {
				dp[n][p] = tmp;
			}
		}
	}
	return dp[n][p];
}

// **NOTE:** the shortest_path function should be only called after the graph has been built up, i.e. after the file has been uploaded.
function shortest_path(s, imd, t) {
	// s is a start point, t is an end point, imd is an array that contain all intermediate points
	// be sure imd doesn't contain any points that ain't intermediate points

	dp = new Array(size);
	for (var i = 0; i < size; ++i) {
		dp[i] = new Array(1 << (size - 1));
		for (var j = 0; j < dp[i].length; ++j) {
			dp[i][j] = -1;
		}
	}

	var p = new Array(size);

	// dp here
	var tmp = 0;
	for (const u of imd) {
		tmp |= (1 << u);
	}

	shortest_length = DP(t, tmp, s, imd);

	// alert(shortest_length);

	var v = t;
	// backtrace the shortest path
	for (var i = imd.length - 1; i >= 0; --i) {
		for (const u of imd) {
			if (((tmp & (1 << u)) !== 0) && (dp[u][tmp ^ (1 << u)] + g[u][v] === dp[v][tmp])) {
				p[i] = u;
				v = u;
				tmp = tmp ^ (1 << u);
				break;
			}
		}
	}

	// generate the final path array
	final_path = new Array();
	final_path.push(s);
	for (var i = 0; i < imd.length; ++i) {
		final_path.push(p[i]);
	}
	final_path.push(t);
	if (imd.length === 0) shortest_length = g[s][t];
	// alert(final_path);

}
