let blogTitle = document.querySelector("#title");
let blogBody = document.querySelector("#body");
let commentDiv = document.querySelector("#commetnDiv");
let name = document.querySelector("#name");
let comment = document.querySelector("#comment");
let submit = document.querySelector("#submit");
// Create blog function
function CreateBlog(title, body) {
  this.title = title;
  this.body = body;

  // Method to update the title and body
  this.updateBlog = function (newTitle, newBody) {
    this.title = newTitle;
    this.body = newBody;

    // Update the content on the page
    blogTitle.innerHTML = `<h1>${this.title}</h1>`;
    blogBody.innerHTML = `<p>${this.body}</p>`;
  };
}

// Creating new blog
let newBlog = new CreateBlog(
  "شی گرایی یا Object Oriented Programming چیست؟",
  "OOP یا Object Orient Programming شیوه ای از برنامه نویسی است که موجودیت‌های نرم افزار را به صورت شی یا Object می‌بیند. قبل از ظهور برنامه نویسی شی گرا ، برنامه‌ها اغلب به شکل Procedural یا رویه ای نوشته می‌شد. در برنامه نویسی رویه ای برنامه‌ها به توابع تقسیم می‌شدند. یعنی برنامه از متغیرهایی که اطلاعات را ذخیره و توابعی که عملیات مورد نظر را روی اطلاعات انجام می‌دادند تشکیل می‌شد."
);
console.log(newBlog);
