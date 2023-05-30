function UpdateInfo(angle, distance) {
    let view = document.getElementById('arrowviewbox');
    angle = angle * Math.PI / 180;
    view.innerHTML = DrawArrow(RotatePoints(pointsOrigin, angle));

    document.getElementById('distance').innerText = String(distance);
}