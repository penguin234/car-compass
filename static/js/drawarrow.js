const pointsOrigin = [
    [0, -0.8],
    [0.5, 0],
    [0.3, 0],
    [0.1, -0.32],
    [0.1, 0.8],
    [-0.1, 0.8],
    [-0.1, -0.32],
    [-0.3, 0],
    [-0.5, 0],
    [0, -0.8]
];

function PointToString(points) {
    return points.map(p => String(p[0]) + ',' + String(p[1])).join();
}

function DrawArrow(points) {
    let res = '';
    res += '<polygon class="arrow" points="';
    res += PointToString(points);
    res += '" />';
    return res;
}


function RotatePoints(points, r) {
    const s = Math.sin(r);
    const c = Math.cos(r);

    const rotate = p => [p[0] * c - p[1] * s, p[0] * s + p[1] * c];

    return points.map(rotate);
}