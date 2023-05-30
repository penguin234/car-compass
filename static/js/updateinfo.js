function UpdateInfo(angle, distance) {
    let view = document.getElementById('arrowviewbox');
    view.innerHTML = DrawArrow(RotatePoints(pointsOrigin, angle));

    document.getElementById('distance').innerText = String(distance);
}