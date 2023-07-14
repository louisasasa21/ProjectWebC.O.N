let slideIdex = 1
// เรียกใช้งาน การเปลี่ยมรูป
function plusSlide(n) {
    showSlide(slideIdex += n);
}
// เรียกใช้งาน ตัวdot
function currentSlide(n) {
    showSlide(slideIdex = n);
}

function showSlide(n) {
    let slide = document.getElementsByClassName("manga-mySlide");
    let dots = document.getElementsByClassName("dot");
    
    // ทำการวนลูปรูปภาพซ่ำ*
    if (n > slide.length) {
        slideIdex = 1;
    } 

    if (n < 1) {
        slideIdex = slide.length;
    }
    // จบ*

    for(let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    
    for(let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // showslideขึ้นมาโดยการกำหนด ตัวที่จะแสดง -1=0=รูปแรก 1=รูปสอง
    slide[slideIdex-1].style.display = 'block';
   
    // ให้ตัว dot แสดงรูปภาพ ให้active เลือกรูปภาพ
    dots[slideIdex-1].className +=" active";

}
   
// เพิ่มส่วนการแสดงผลอัตโนมัติ
setInterval(() => {
    plusSlide(1);
}, 8000); // เปลี่ยนสไลด์ทุก ๆ 8 วินาที

   

showSlide();