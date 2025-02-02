// โค้ดเปลี่ยนบทเรียน
let lessons = [
    { img: "images/lesson1.jpg", text: "บทเรียนที่ 1: วัตถุประสงค์ของการเรียนรู้วิธีการปลอดภัย" },
    { img: "images/lesson2.jpg", text: "บทเรียนที่ 2: วิธีป้องกันไม่ให้ข้อมูลรั่วไหล" },
    { img: "images/lesson3.jpg", text: "บทเรียนที่ 3: ผลกระทบของการเล่นโซเชียลมีเดียมากเกินไป" }
];

let currentLesson = 0;

function updateLesson() {
    document.getElementById("lessonImage").src = lessons[currentLesson].img;
    document.getElementById("lessonText").textContent = lessons[currentLesson].text;
}

function nextLesson() {
    if (currentLesson < lessons.length - 1) {
        currentLesson++;
        updateLesson();
    }
}

function prevLesson() {
    if (currentLesson > 0) {
        currentLesson--;
        updateLesson();
    }

// เมื่อผู้ใช้เรียนจบบทที่ 1:
// สมมติว่ามีปุ่มหรือเหตุการณ์ที่ผู้ใช้คลิกเมื่อเรียนจบ
document.getElementById('finishLesson1Button').addEventListener('click', () => {
    localStorage.setItem('lesson1Completed', 'true');
   document.getElementById('lesson2').classList.remove('lesson-locked');
});

        // ตรวจสอบสถานะการเรียน (ตัวอย่าง: ตรวจสอบว่าผู้ใช้ได้เรียนบทที่ 1 แล้วหรือไม่)
        let module1Completed = true; // เปลี่ยนเป็น false หากยังไม่ได้เรียน

        if (module1Completed) {
            // ปลดล็อกบทที่ 2
            document.getElementById("module2").classList.remove("locked");
            document.getElementById("module2").querySelector(".lock-message").style.display = "none";
        }

        // ตรวจสอบสถานะการเรียน (ตัวอย่าง: ตรวจสอบว่าผู้ใช้ได้เรียนบทที่ 2 แล้วหรือไม่)
        let module2Completed = true; // เปลี่ยนเป็น false หากยังไม่ได้เรียน

        if (module2Completed) {
            // ปลดล็อกบทที่ 3
            document.getElementById("module3").classList.remove("locked");
            document.getElementById("module3").querySelector(".lock-message").style.display = "none";
        }}
        const lessonCategories = document.querySelectorAll('.lesson-category');

lessonCategories.forEach(category => {
  category.addEventListener('mouseover', () => {
    category.style.backgroundColor = '#eee';
  });

  category.addEventListener('mouseout', () => {
    category.style.backgroundColor = '#fff';
  });
});
const lesson = document.querySelectorAll('.lesson-category');

lessonCategories.forEach(category => {
  category.addEventListener('mouseover', () => {
    category.style.backgroundColor = '#eee';
  });

  category.addEventListener('mouseout', () => {
    category.style.backgroundColor = '#fff';
  });
});