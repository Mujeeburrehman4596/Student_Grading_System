function calculateGrade() {
    const computer = parseInt(document.getElementById('computer').value);
    const english = parseInt(document.getElementById('english').value);
    const physics = parseInt(document.getElementById('physics').value);
    const chemistry = parseInt(document.getElementById('chemistry').value);
    const math = parseInt(document.getElementById('math').value);

    const totalMarks = 500;
    const obtainedMarks = computer + english + physics + chemistry + math;
    const percentage = (obtainedMarks / totalMarks) * 100;
    let grade = '';
    let remarks = '';

    if (percentage >= 90) {
        grade = 'A+';
        remarks = 'Excellent';
    } else if (percentage >= 80) {
        grade = 'A';
        remarks = 'Very Good';
    } else if (percentage >= 70) {
        grade = 'B';
        remarks = 'Good';
    } else if (percentage >= 60) {
        grade = 'C';
        remarks = 'Fair';
    } else if (percentage >= 50) {
        grade = 'D';
        remarks = 'Pass';
    } else {
        grade = 'F';
        remarks = 'Fail';
    }

    document.getElementById('obtainedMarks').innerText = obtainedMarks;
    document.getElementById('percentage').innerText = percentage.toFixed(2) + '%';
    document.getElementById('grade').innerText = grade;
    document.getElementById('remarks').innerText = remarks;
}
