(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./auth/auth.guard.ts":
/*!****************************!*\
  !*** ./auth/auth.guard.ts ***!
  \****************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ "./src/app/service.service.ts");




let AuthGuard = class AuthGuard {
    constructor(ds, router) {
        this.ds = ds;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.ds.isLoggedIn() == false) {
            this.router.navigate(['/dangnhap']);
            alert('Hãy đăng nhập trước khi thi nào ^^');
            localStorage.removeItem('token');
            return false;
        }
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"shift\">\r\n    <ul>\r\n        <li><a [routerLink]=\"['/trangchu']\"><i class=\"fa fa-fw fa-home\"></i> Trang chủ</a></li>\r\n        <li><a [routerLink]=\"['/gioithieu']\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i> Giới thiệu</a></li>\r\n        <li><a [routerLink]=\"['/lienhe']\"><i class=\"fa fa-fw fa-envelope\"></i> Liên hệ</a></li>\r\n        <li><a [routerLink]=\"['/gopy']\"><i class=\"fa fa-assistive-listening-systems\"></i> Góp ý</a></li>\r\n        <li><a [routerLink]=\"['/hoidap']\"><i class=\"fas fa-question\"></i> Hỏi đáp</a></li>\r\n        <!-- <li *ngIf=\"this.ds.isLoggedIn()==false\"><a [routerLink]=\"['/dangnhap']\">Đăng nhập</a></li> -->\r\n        <!-- <li ><a [routerLink]=\"['/dangki']\">Đăng ký</a></li> -->\r\n        <li>\r\n            <div class=\"dropdown\" >\r\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                    data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"color: gold;font-weight: bold;background: black;\">\r\n                    <i class=\"fas fa-user\" style=\"margin-right:4px\"></i><span *ngIf=\"!this.ds.isLoggedIn()\">Tài khoản</span>\r\n                   <span *ngIf=\"this.ds.isLoggedIn()\">{{this.ds.getUsername()}}</span> \r\n                </button>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                    <a class=\"dropdown-item\" *ngIf=\"!this.ds.isLoggedIn()\" [routerLink]=\"['/dangki']\" style=\"color:blueviolet\"><i class=\"fas fa-registered\"></i>  Đăng ký</a>\r\n                    <a class=\"dropdown-item\" *ngIf=\"!this.ds.isLoggedIn()\" [routerLink]=\"['/dangnhap']\" style=\"color:blueviolet\" ><i class=\"fas fa-sign-in-alt\"></i>  Đăng nhập</a>\r\n                    <a class=\"dropdown-item\" *ngIf=\"this.ds.isLoggedIn()\"[routerLink]=\"['/quenmatkhau']\" style=\"color:blueviolet\">Quên mật khẩu</a>\r\n                    <a class=\"dropdown-item\" *ngIf=\"this.ds.isLoggedIn()\" [routerLink]=\"['/doimatkhau']\" style=\"color:blueviolet\" >Đổi mật khẩu</a>\r\n                    <a class=\"dropdown-item\" *ngIf=\"this.ds.isLoggedIn()\" [routerLink]=\"['/suadoitaikhoan']\" style=\"color:blueviolet\">Cập nhật tài khoản</a>\r\n                    <a class=\"dropdown-item\" *ngIf=\"this.ds.isLoggedIn()\" (click)=\"logOut()\" style=\"color:blueviolet\" >Đăng xuất</a>\r\n\r\n                </div>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n\r\n</nav>\r\n<div class=\"container\">\r\n    <!-- <div class=\"row banner\" style=\"width:100%\">\r\n        <img src=\"../assets/images/banner.png\" alt=\"\" class=\"responsive\">\r\n    </div> -->\r\n\r\n    <br>\r\n    <div class=\"row\">\r\n        <div class=\"col-9\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n\r\n        <div class=\"col-3\">\r\n            <div class=\"accordion\" id=\"accordionExample\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\" id=\"headingOne\">\r\n                        <h2 class=\"mb-0\">\r\n                            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\"\r\n                                aria-expanded=\"true\" aria-controls=\"collapseOne\" style=\"color:blueviolet\">\r\n                                <i class=\"fa fa-th-list\" style=\"font-size:18px;\"> Danh mục môn học </i>\r\n                            </button>\r\n                        </h2>\r\n                    </div>\r\n                    <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\"\r\n                        data-parent=\"#accordionExample\">\r\n                        <ul class=\"list-group\">\r\n                            <div *ngFor=\"let danhmuc of danhmuc\">\r\n                                <a [routerLink]=\"['/thiTN',danhmuc.Id]\" style=\"text-decoration: none;color:blue\"\r\n                                    id=\"danhmuc\">\r\n                                    <li class=\"list-group-item\">{{danhmuc.Name}}</li>\r\n                                </a>\r\n                            </div>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div><!-- end container -->\r\n<footer class=\"footer text-center\" style=\"background: black;color:white\" id=\"myFooter\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n\r\n            <!-- Footer Location -->\r\n            <div class=\"col-lg-4 mb-5 mb-lg-0\">\r\n                <h4 class=\"text-uppercase mb-4\">Địa chỉ</h4>\r\n                <p class=\"lead mb-0\">2215 John Daniel Drive\r\n                    <br>Clark, MO 65243</p>\r\n            </div>\r\n\r\n            <!-- Footer Social Icons -->\r\n            <div class=\"col-lg-4 mb-5 mb-lg-0\">\r\n                <h4 class=\"text-uppercase mb-4\">Liên kết</h4>\r\n                <a class=\"btn btn-outline-light btn-social mx-1\">\r\n                    <i class=\"fab fa-fw fa-facebook-f\"></i>\r\n                </a>\r\n                <a class=\"btn btn-outline-light btn-social mx-1\">\r\n                    <i class=\"fab fa-fw fa-twitter\"></i>\r\n                </a>\r\n                <a class=\"btn btn-outline-light btn-social mx-1\">\r\n                    <i class=\"fab fa-fw fa-linkedin-in\"></i>\r\n                </a>\r\n                <a class=\"btn btn-outline-light btn-social mx-1\">\r\n                    <i class=\"fab fa-fw fa-dribbble\"></i>\r\n                </a>\r\n            </div>\r\n\r\n            <!-- Footer About Text -->\r\n            <div class=\"col-lg-4\">\r\n                <h4 class=\"text-uppercase mb-4\">Exam Online</h4>\r\n                <p class=\"lead mb-0\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magni natus ab\r\n                    facilis sequ\r\n                    <a href=\"http://startbootstrap.com\">Start Bootstrap</a>.</p>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</footer>\r\n\r\n\r\n\r\n<!-- <section class=\"copyright py-4 text-center text-white\" style=\"color:white;background: black;\">\r\n    <div class=\"container\">\r\n        <small>Copyright &copy; Your Website 2019</small>\r\n    </div>\r\n</section> -->\r\n\r\n<!-- <div class=\"scroll-to-top d-lg-none position-fixed \">\r\n    <a class=\"js-scroll-trigger d-block text-center text-white rounded\" href=\"#page-top\">\r\n        <i class=\"fa fa-chevron-up\"></i>\r\n    </a>\r\n</div> -->\r\n\r\n\r\n\r\n<!-- Bootstrap core JavaScript -->\r\n<script src=\"vendor/jquery/jquery.min.js\"></script>\r\n<script src=\"vendor/bootstrap/js/bootstrap.bundle.min.js\"></script>\r\n\r\n<!-- Plugin JavaScript -->\r\n<script src=\"vendor/jquery-easing/jquery.easing.min.js\"></script>\r\n\r\n<!-- Contact Form JavaScript -->\r\n<script src=\"js/jqBootstrapValidation.js\"></script>\r\n<script src=\"js/contact_me.js\"></script>\r\n\r\n<!-- Custom scripts for this template -->\r\n<script src=\"js/freelancer.min.js\"></script>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dangki/dangki.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dangki/dangki.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <H1 style=\"text-align: center;color:green;\">Đăng Ký(*Có validation)</H1>\n    <br>\n    <form #studentForm=\"ngForm\">\n        <!-- USERNAME -->\n        <div class=\"form-group \">\n            <i class=\"fas fa-user\"></i><label>Username</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"formStudent.username\" name=\"username\"\n                #usernameControl=\"ngModel\" pattern=\"[^' ']+\" placeholder=\"Nhập username\" required\n                [class.is-invalid]=\"usernameControl.touched&&usernameControl.invalid\"\n                [class.is-valid]=\"usernameControl.touched&&usernameControl.valid\">\n            <small class=\"form-text text-danger\" *ngIf=\"usernameControl.touched&&usernameControl.errors?.required\">\n                Username k được bỏ trống\n            </small>\n            <small class=\"form-text text-danger\" *ngIf=\"usernameControl.touched&&usernameControl.errors?.pattern\">\n                Username k được có khoảng trắng\n            </small>\n        </div>\n        <!-- END USERNAME -->\n\n        <!-- Email -->\n        <div class=\"form-group \">\n            <i class=\"fas fa-envelope-square\"></i><label>Email khôi phục tài khoản</label>\n            <input type=\"email\" class=\"form-control\" name=\"email\" required email #emailControl=\"ngModel\"\n                [(ngModel)]=\"formStudent.email\" \n                [class.is-invalid]=\"emailControl.touched&&emailControl.invalid\"\n                [class.is-valid]=\"emailControl.touched&&emailControl.valid\"\n                placeholder=\"Nhập Email\">\n\n            <small class=\"form-text text-danger\" *ngIf=\"emailControl.touched&&emailControl.errors?.required\">\n                Email k được bỏ trống\n            </small>\n            <small class=\"form-text text-danger\" *ngIf=\"emailControl.errors?.email\">\n                Email k đúng định dạng\n            </small>\n\n        </div>\n\n        <!--END Email -->\n\n        <!-- Password -->\n        <div class=\"form-group \">\n            <i class=\"fas fa-key\"></i><label>Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Nhập Password\"\n                [(ngModel)]=\"formStudent.password\" #passwordControl=\"ngModel\"\n                [class.is-invalid]=\"passwordControl.touched&&passwordControl.invalid\" required minlength=6\n                [class.is-valid]=\"passwordControl.touched&&passwordControl.valid\">\n            <small class=\"form-text text-danger\" *ngIf=\"passwordControl.touched&&passwordControl.errors?.required\">\n                Password k được bỏ trống\n            </small>\n            <small class=\"form-text text-danger\" *ngIf=\"passwordControl.errors?.minlength\">\n                Password phải có ít nhất 6 kí tự\n            </small>\n        </div>\n\n\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"studentForm.invalid\"\n            (click)=\"Addthongtin(studentForm)\" style=\"width:25%;height:50px\">Submit</button>\n    </form>\n    <br>\n\n  \n\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dangnhap/dangnhap.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dangnhap/dangnhap.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<br>\n<br>\n\n    <h1 style=\"text-align: center;color:green;\"> Đăng nhập\n    </h1>\n    <br>\n    <form #formLogin=\"ngForm\">\n        <div class=\"input-container\">\n            <i class=\"fa fa-user icon\"></i>\n            <input class=\"input-field\" type=\"text\" placeholder=\"nhập Username\" name=\"username\" ngModel>\n        </div>\n\n        <div class=\"input-container\">\n            <i class=\"fa fa-key icon\"></i>\n            <input class=\"input-field\" type=\"password\" placeholder=\"nhập Password\" name=\"password\" ngModel>\n        </div>\n        <div class=\"d-flex flex-row-reverse bd-highlight mb-3\">\n            <a [routerLink]=\"['/quenmatkhau']\" style=\"text-decoration: none;color:cornflowerblue;margin-left:15px\">\n                Quên mật khẩu\n            </a>\n            <a [routerLink]=\"['/dangki']\" style=\"text-decoration: none;color:cornflowerblue\">\n                Đăng ký\n            </a><br>\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-success mb-2\" (click)=\"login(formLogin)\" style=\"width: 25%;height: 60px;\">Đăng Nhập</button>\n\n\n\n\n    </form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/danhmucmonhoc/danhmucmonhoc.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/danhmucmonhoc/danhmucmonhoc.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>danhmucmonhoc works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/doimatkhau/doimatkhau.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/doimatkhau/doimatkhau.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <br>\r\n    <h2 style=\"color:green;text-align:center\">Đổi mật khẩu</h2>\r\n    <form #formControl=\"ngForm\">\r\n    \r\n        <div class=\"form-group\"> <i class=\"fas fa-key\"></i><label for=\"formGroupExampleInput2\">Nhập mật khẩu mới</label>\r\n            <!-- ô input -->\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"passwordMoi\" name=\"passwordMoi\">\r\n        </div>\r\n\r\n\r\n        \r\n    \r\n        <button class=\"btn btn-success\" (click)=\"DoiMatKhau(formControl)\">Xác nhận</button>\r\n    </form>\r\n</div>\r\n\r\n\r\n\r\n<!-- <h1>Mảng students.json</h1>\r\n<h4 style=\"color:red;font-weight: bold;\">{{this.students|json}}</h4> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/editinfo/editinfo.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/editinfo/editinfo.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #formControl=\"ngForm\">\n    <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Username\" name=\"username\"\n                [(ngModel)]=\"username\" name=\"username\" disabled>\n\n        </div>\n     \n\n    </div>\n    <div class=\"form-group\">\n        <label for=\"fullname\">fullname</label>\n        <input type=\"text\" class=\"form-control\" id=\"fullname\"\n        [(ngModel)]=\"fullname\"\n            name=\"fullname\">\n    </div>\n\n    <div class=\"form-row\">\n\n        <div class=\"form-group col-md-4\">\n            <label for=\"inputState\">Giới tính</label>\n            <select id=\"inputState\" class=\"form-control\" [(ngModel)]=\"gender\"\n            name=\"gender\">\n                <option >Choose...</option>\n                <option value=\"true\">Nam</option>\n                <option value=\"false\">Nữ</option>\n            </select>\n        </div>\n        <div class=\"form-group col-md-8\">\n            <label for=\"bdate\">Birthday</label>\n            <input type=\"date\" class=\"form-control\" id=\"bdate\" [(ngModel)]=\"birthday\"\n            name=\"birthday\">\n        </div>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"luuThayDoi(formControl)\">Lưu thay đổi</button>\n</form>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gioithieu/gioithieu.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gioithieu/gioithieu.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<H4>About Me: Vũ Duy Tiến Phát (Hình ảnh chỉ mang tính trang trí <i class=\"far fa-smile-beam\"></i> )</H4>\n<img src=\"https://www.thebalancecareers.com/thmb/9-rS4kHFhFqQJBB8DnToGsZ7_HM=/950x0/how-to-write-about-me-page-examples-4142367-FINAL-ff212f14c0294f2b962695ff84455890.png\"  class=\"responsive\" alt=\"\">"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gopy/gopy.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gopy/gopy.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"responsive\" src=\"https://chefjob.vn/images/tin-tuc/ung-vien/cac-doanh-nghiep-quan-tam-den-feedback-cua-khach-hang.jpg\" alt=\"\">\n\n<img class=\"responsive\" src=\"https://alejandraatehortuad.files.wordpress.com/2012/12/feedback-cartoon.jpg?w=255\" alt=\"\">\n<img src=\"https://previews.123rf.com/images/sabelskaya/sabelskaya1906/sabelskaya190601584/128171202-customer-feedback-young-cartoon-woman-holding-up-a-star-satisfied-client-adding-a-positive-point-to-.jpg\" alt=\"\">"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/hoidap/hoidap.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/hoidap/hoidap.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr>\r\n<h4 style=\"text-align: center;\"><i class=\"fas fa-envelope\"></i> Gửi qua email<span style=\"color:rgb(20, 20, 190)\"> VDTP1234@gmail.com</span> </h4>\r\n<div class=\"row\">\r\n    <div class=\"col-6\">\r\n        <img style=\"width:100%;height:150%\" src=\"../../assets/hoidap.jpg\" alt=\"\" >\r\n    </div>\r\n    <div class=\"col-6\">\r\n        <img style=\"width:100%;height:150%;border:1px solid black\" src=\"../../assets/hoidap1.jpg\" alt=\"\" >\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/lienhe/lienhe.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/lienhe/lienhe.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Contact Form</h3>\n\n<div class=\"container\">\n   <div class=\"row\">\n      <div class=\"col-9\">\n         <form action=\"\" #formControl=\"ngForm\">\n            <label for=\"fname\">First Name</label>\n            <input type=\"text\" id=\"fname\" name=\"firstname\" placeholder=\"Your name..\" name=\"fname\"\n               [(ngModel)]=\"firstname\">\n\n            <label for=\"lname\">Last Name</label>\n            <input type=\"text\" name=\"lname\" id=\"lname\" name=\"lastname\" placeholder=\"Your last name..\"\n               [(ngModel)]=\"lastname\">\n\n            <label for=\"country\">Country</label>\n            <select id=\"country\" name=\"country\" >\n               <option value=\"usa\">VietNam</option>\n               <option value=\"australia\">Australia</option>\n               <option value=\"canada\">Canada</option>\n               <option value=\"usa\">USA</option>\n\n            </select>\n\n            <label for=\"subject\">Nội dung</label>\n            <textarea id=\"subject\" name=\"subject\" placeholder=\"Write something..\" style=\"height:200px\"\n               [(ngModel)]=\"subject\"></textarea>\n\n            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSubmit();\">Submit</button>\n         </form>\n      </div>\n      <div class=\"col-3\">\n         <img src=\"../../assets/contact.png\" alt=\"\" class=\"responsive\" style=\"width:100%;height:30%\">\n      </div>\n   </div>\n\n\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quenmatkhau/quenmatkhau.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quenmatkhau/quenmatkhau.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\n\n    <h1 style=\"color:green   ;text-align:center\">Quên mật khẩu</h1>\n    <form #formControl=\"ngForm\">\n        <div class=\"form-group\">\n            <i class=\"fas fa-user\"></i> <label for=\"validationCustom01\"> Username</label>\n            <input type=\"text\" class=\"form-control\" id=\"validationCustom01\" [(ngModel)]=\"formSudent.username\"\n                name=\"username\" placeholder=\"Nhập username của bạn\" [(ngModel)]=\"formSudent.username\">\n        </div>\n\n        <div class=\"form-group\">\n            <i class=\"fas fa-envelope-square\"></i><label for=\"validationCustomUsername\">Email</label>\n            <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" id=\"validationCustomUsername\" placeholder=\"Nhập email của bạn\"\n                    [(ngModel)]=\"formSudent.email\" name=\"email\">\n            </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-success mb-2\" (click)=\"HienThiMatKhau(formControl)\">Submit</button>\n    </form>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/result/result.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/result/result.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>result works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/suadoitaikhoan/suadoitaikhoan.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/suadoitaikhoan/suadoitaikhoan.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <H1 style=\"text-align: center;color:yellowgreen;\">Sửa Đổi Thông Tin</H1>\n    <br>\n    <form>\n        <div class=\"form-row\">\n            <div class=\"col-md-4 mb-3\">\n                <label for=\"validationCustom01\">Họ và tên</label>\n                <input type=\"text\" class=\"form-control\" id=\"validationCustom01\" placeholder=\"Nguyen Van A\"\n                    [(ngModel)]=\"formSudent.fullname\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"col-md-4 mb-3\">\n                <label for=\"validationCustom02\">Ngày tháng năm sinh</label>\n                <input type=\"date\" class=\"form-control\" id=\"validationCustom02\" [(ngModel)]=\"formSudent.birthday\"\n                    [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"col-md-4 mb-3\">\n                <i class=\"fas fa-envelope-square\"></i> <label for=\"validationCustomUsername\">Email</label>\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" id=\"validationCustomUsername\" placeholder=\"abc@gmail.com\"\n                        [(ngModel)]=\"formSudent.email\" [ngModelOptions]=\"{standalone: true}\">\n                </div>\n            </div>\n        </div>\n        <label for=\"exampleInputEmail1\">Tài Khoản</label>\n        <label for=\"exampleInputEmail1\" style=\"margin-left: 350px\">Mật Khẩu</label>\n        <div class=\"row\">\n            <div class=\"col\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"nhập tài khoản\" [(ngModel)]=\"formSudent.username\"\n                    [ngModelOptions]=\"{standalone: true}\">\n            </div>\n\n            <div class=\"col\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Nhập mật khẩu\"\n                    [(ngModel)]=\"formSudent.password\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n        </div>\n\n        <label for=\"exampleInputEmail1\" style=\"margin-top: 10px;\"> Giới Tính:</label>\n        <br>\n        <input type=\"radio\" name=\"gioitinh\" value=\"nam\" [(ngModel)]=\"formSudent.gender\"\n            [ngModelOptions]=\"{standalone: true}\"> Nam<br>\n        <input type=\"radio\" name=\"gioitinh\" value=\"nu\" [(ngModel)]=\"formSudent.gender\"\n            [ngModelOptions]=\"{standalone: true}\"> Nữ<br>\n        <br>\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"SaveStudentEdit(selectStudentId)\">Submit</button>\n    </form>\n    <br>\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th scope=\"col\">Id</th>\n                <th scope=\"col\">username</th>\n                <th scope=\"col\">password</th>\n                <th scope=\"col\">fullname</th>\n                <th scope=\"col\">birthday</th>\n                <th scope=\"col\">email</th>\n                <th scope=\"col\">gender</th>\n                <th scope=\"col\">action</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let sv of students\">\n                <th>{{sv.id}}</th>\n                <th>{{sv.username}}</th>\n                <td>{{sv.password}}</td>\n                <td>{{sv.fullname}}</td>\n                <td>{{sv.birthday| date :'dd-MM-yyyy'}}</td>\n                <td>{{sv.email}}</td>\n                <td>{{sv.gender}}</td>\n                <td style=\"width: 50%;height: 50%;\">\n                    <button type=\"button\" class=\"btn btn-primary \" (click)=\"ShowEditStudent(sv)\">sua</button>\n                    <button type=\"button\" class=\"btn btn-danger \" style=\"margin-left: 10px;\">Xoa</button>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/thi-tn/thi-tn.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/thi-tn/thi-tn.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- canh phải thì dùng d-flex -->\n\n<div class=\"d-flex justify-content-between\">\n    <h6 class=\"alert alert-info\" style=\"font-weight:bold\">Hướng dẫn thi: Chọn đáp án và nhấn Submit\n    </h6>\n   \n    <button class=\"btn btn-danger\" >\n        <i class=\"fa fa-clock-o\" style=\"margin-right:4px ;\"></i> <countdown #countdown [config]=\"config\" (event)=\"handleEvent2($event)\"></countdown>\n    </button>\n    \n</div>\n\n<br>\n\n<form action=\"\" #formControl=\"ngForm\"  style=\"margin-bottom:0px;\">\n    <!-- <button type=\"submit\">coi formControl</button> -->\n    <div class=\"container\">\n        <!-- CARD -->\n        <div class=\"card\" *ngFor=\"let quiz of Quizs| paginate: { itemsPerPage: 1, currentPage: cur }\">\n            <div class=\"card-header\" style=\"background: greenyellow;\">\n                {{tenMonHoc}}\n            </div>\n            <!-- card-body -->\n            <div class=\"card-body bg-dark text-white\">\n                <div class=\"row alert alert-danger\">{{quiz.Text}}</div>\n                <hr>\n                <!-- 4 lựa chọn -->\n\n                <div class=\"form-group\">\n                    <!-- 1 cái form check là 1 cái radio button -->\n                    <div class=\"form-check\" *ngFor=\"let x of quiz.Answers\"\n                        [class.xanhla]=\"timCauDung(quiz.AnswerId,x.Id)\" [class.do]=\"timCauSai(quiz.AnswerId,x.Id)\">\n                        <label [class.container]=true>{{x.Text}}\n                            <input type=\"radio\" name=\"{{quiz.Id}}\" value=\"{{x.Id}}\" [(ngModel)]=\"dapAnUser\"\n                                [disabled]=\"disableInput\"><i [hidden]=\"!timCauDung(quiz.AnswerId,x.Id)\"\n                                class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>\n                            <i class=\"fa fa-times-circle\" aria-hidden=\"true\"\n                                [hidden]=\"!timCauSai(quiz.AnswerId,x.Id)\"></i>\n                            <span class=\"checkmark\"></span>\n                        </label>\n\n\n                    </div>\n                    <br>\n                    <div class=\"d-flex justify-content-between\">\n                        <button class=\"btn btn-outline-success btn-lg\" (click)=\"submit(quiz)\"\n                            style=\"font-weight: bold;color:yellow\" [disabled]=\"disableSubmit\">Submit\n                        </button>\n                        <button class=\"btn btn-primary btn-lg\" (click)=\"Next()\" [disabled]=\"disableButtonNext\">Next\n                        </button>\n                    </div>\n                    <br>\n                    <div *ngIf=\"chuaChonDapAn\" class=\"alert alert-warning\">\n                        Bạn chưa chọn đáp án\n                    </div>\n                    <div *ngIf=\"thongBaoChonDung\" class=\"alert alert-success\">Oh yeah, bạn làm rất tốt, hãy tiếp tục\n                        nào!!</div>\n                    <div *ngIf=\"thongBaoChonSai\" class=\"alert alert-danger\">Sai rồi <i class=\"far fa-frown\"></i>, nhưng chưa sao cả hãy chọn bừa tiếp để tìm đáp án đúng nào <i class=\"far fa-smile-beam\"></i> \n                        </div>\n\n                </div>\n\n                <!-- END chứa 4 lựa chọn -->\n            </div>\n            <!-- END card-body  -->\n\n            <!-- FOOTER -->\n            <div class=\"card-footer text-muted alert \" style=\"background: greenyellow;\">\n                <span style=\"font-weight: bold;color:black\">Mark: {{mark}}/{{Quizs.length}}</span>\n            </div>\n            <!-- END FOOTER -->\n        </div>\n        <!-- END CARD -->\n        <br><br>\n        <!-- <pagination-controls (pageChange)=\"p = $event\"></pagination-controls> -->\n    </div>\n\n</form>\n<div id=\"myProgress\">\n        <div id=\"myBar\"></div>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/trangchu/trangchu.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/trangchu/trangchu.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <ol class=\"carousel-indicators\" style=\"background:black\">\r\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\" style=\"width:18px;height:18px;border-radius:50%;\"></li>\r\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\" style=\"width:18px;height:18px;border-radius:50%;\"></li>\r\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\" style=\"width:18px;height:18px;border-radius:50%;\"></li>\r\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"3\" style=\"width:18px;height:18px;border-radius:50%;\"></li>\r\n\r\n    </ol>\r\n    <div class=\"carousel-inner\">\r\n        <div class=\"carousel-item active\">\r\n            <img src=\"../assets/banner1.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n        </div>\r\n        <div class=\"carousel-item\">\r\n            <img src=\"../assets/taolao1.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n        </div>\r\n        <div class=\"carousel-item\">\r\n            <img src=\"../assets/banner3.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n        </div>\r\n        <div class=\"carousel-item\">\r\n            <img src=\"../assets/girl.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n        </div>\r\n\r\n\r\n    </div>\r\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n    </a>\r\n</div>\r\n\r\n\r\n\r\n<!-- marquee -->\r\n<!-- <div class=\"glow\">\r\n        <marquee behavior=\"scroll\" direction=\"left\" scrollamount=\"10\">\r\n            <div style=\"text-align: center;\">\r\n                <p>Bạn muốn nâng cao trình độ, kiến thức để thi trắc nghiệm</p>\r\n                <p>Chúc mừng bạn đã đến đúng chỗ!!!!</p>\r\n            </div>\r\n        </marquee>\r\n\r\n\r\n    </div> -->\r\n<br>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-6\" *ngFor=\"let monHoc of listMonHoc | paginate: { itemsPerPage: 4, currentPage: p } \">\r\n        <div class=\"card text-center\">\r\n            <a [routerLink]=\"['/thiTN',monHoc.Id]\" style=\"text-decoration: none;\">\r\n                <div>\r\n                    <img src=\"../../assets/images/{{monHoc.Logo}}\" alt=\"...\" width=\"50%\">\r\n                </div>\r\n                <div class=\"card-footer text-muted\" style=\"height: auto; \">\r\n                    {{monHoc.Name}}\r\n                </div>\r\n            </a>\r\n        </div>\r\n        <br>\r\n    </div>\r\n\r\n\r\n</div>\r\n<br>\r\n<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- {{this.y.getTen()}} -->\r\n<!-- phải chuyển y sang public mới sài được -->"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.w3-bar a {\r\n    color: yellow;\r\n    font-weight: bold;\r\n    ;\r\n}\r\n\r\n.w3-bar a:hover {\r\n    background: blueviolet;\r\n}\r\n\r\n.w3-dropdown-content {\r\n    background: black;\r\n}\r\n\r\nbody {\r\n    font-family: 'Roboto', sans-serif;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n\r\nsmall {\r\n    font-size: 12px;\r\n    color: rgba(0, 0, 0, 0.4);\r\n  }\r\n\r\n/* h1 {\r\n    text-align: center;\r\n    padding: 50px 0;\r\n    font-weight: 800;\r\n    margin: 0;\r\n    letter-spacing: -1px;\r\n    color: inherit;\r\n    font-size: 40px;\r\n  }\r\n  \r\n  h2 {\r\n    text-align: center;\r\n    font-size: 30px;\r\n    margin: 0;\r\n    font-weight: 300;\r\n    color: inherit;\r\n    padding: 50px;\r\n  }\r\n  \r\n  .center {\r\n    text-align: center;\r\n  } */\r\n\r\n/* section {\r\n    height: 100vh;\r\n  } */\r\n\r\n/* NAVIGATION */\r\n\r\nnav {\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    background: blueviolet;\r\n    padding: 5px 0;\r\n    box-shadow: 0px 5px 0px #dedede;\r\n    \r\n  }\r\n\r\nnav ul {\r\n    list-style: none;\r\n    text-align: center;\r\n  }\r\n\r\nnav ul li {\r\n    display: inline-block;\r\n  }\r\n\r\nnav ul li a {\r\n    display: block;\r\n    padding: 15px;\r\n    text-decoration: none;\r\n    color: white;\r\n    font-weight: 800;\r\n    text-transform: uppercase;\r\n    margin: 0 10px;\r\n  }\r\n\r\nnav ul li a,\r\n  nav ul li a:after,\r\n  nav ul li a:before {\r\n    transition: all 0.28s;\r\n  }\r\n\r\nnav ul li a:hover {\r\n    color: rgb(85, 85, 85);\r\n  }\r\n\r\n/* SHIFT */\r\n\r\nnav.shift ul li a {\r\n    position:relative;\r\n    z-index: 1;\r\n  }\r\n\r\nnav.shift ul li a:hover {\r\n    color: yellow;\r\n  }\r\n\r\nnav.shift ul li a:after {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    margin: auto;\r\n    width: 100%;\r\n    height: 1px;\r\n    content: '.';\r\n    color: transparent;\r\n    background: black;\r\n    visibility: none;\r\n    opacity: 0;\r\n    z-index: -1;\r\n  }\r\n\r\nnav.shift ul li a:hover:after {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    height: 100%;\r\n  }\r\n\r\n/* Keyframes */\r\n\r\n@-webkit-keyframes fill {\r\n    0% {\r\n      width: 0%;\r\n      height: 1px;\r\n    }\r\n    50% {\r\n      width: 100%;\r\n      height: 1px;\r\n    }\r\n    100% {\r\n      width: 100%;\r\n      height: 100%;\r\n      background: #333;\r\n    }\r\n  }\r\n\r\n/* Keyframes */\r\n\r\n@-webkit-keyframes circle {\r\n    0% {\r\n      width: 1px;\r\n      top: 0;\r\n      left: 0;\r\n      bottom: 0;\r\n      right: 0;\r\n      margin: auto;\r\n      height: 1px;\r\n      z-index: -1;\r\n      background: #eee;\r\n      border-radius: 100%;\r\n    }\r\n    100% {\r\n      background: #aaa;\r\n      height: 5000%;\r\n      width: 5000%;\r\n      z-index: -1;\r\n      top: 0;\r\n      bottom: 0;\r\n      left: 0;\r\n      right: 0;\r\n      margin: auto;\r\n      border-radius: 0;\r\n    }\r\n  }\r\n \r\n\r\n\r\n \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsVUFBVTtJQUNWLFNBQVM7RUFDWDs7QUFFQTtJQUNFLGVBQWU7SUFDZix5QkFBeUI7RUFDM0I7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXFCRzs7QUFFSDs7S0FFRzs7QUFFSCxlQUFlOztBQUNmO0lBQ0UsVUFBVTtJQUNWLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLCtCQUErQjs7RUFFakM7O0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztBQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCOztBQUNBO0lBQ0UsY0FBYztJQUNkLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsY0FBYztFQUNoQjs7QUFDQTs7O0lBR0UscUJBQXFCO0VBQ3ZCOztBQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCOztBQUlBLFVBQVU7O0FBQ1Y7SUFDRSxpQkFBaUI7SUFDakIsVUFBVTtFQUNaOztBQUNBO0lBQ0UsYUFBYTtFQUNmOztBQUNBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRO0lBQ1IsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixXQUFXO0VBQ2I7O0FBQ0E7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDs7QUFJQSxjQUFjOztBQUNkO0lBQ0U7TUFDRSxTQUFTO01BQ1QsV0FBVztJQUNiO0lBQ0E7TUFDRSxXQUFXO01BQ1gsV0FBVztJQUNiO0lBQ0E7TUFDRSxXQUFXO01BQ1gsWUFBWTtNQUNaLGdCQUFnQjtJQUNsQjtFQUNGOztBQUVBLGNBQWM7O0FBQ2Q7SUFDRTtNQUNFLFVBQVU7TUFDVixNQUFNO01BQ04sT0FBTztNQUNQLFNBQVM7TUFDVCxRQUFRO01BQ1IsWUFBWTtNQUNaLFdBQVc7TUFDWCxXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsZ0JBQWdCO01BQ2hCLGFBQWE7TUFDYixZQUFZO01BQ1osV0FBVztNQUNYLE1BQU07TUFDTixTQUFTO01BQ1QsT0FBTztNQUNQLFFBQVE7TUFDUixZQUFZO01BQ1osZ0JBQWdCO0lBQ2xCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udzMtYmFyIGEge1xyXG4gICAgY29sb3I6IHllbGxvdztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgO1xyXG59XHJcblxyXG4udzMtYmFyIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogYmx1ZXZpb2xldDtcclxufVxyXG5cclxuLnczLWRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgc21hbGwge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICB9XHJcbiAgXHJcbiAgLyogaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNTBweCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH0gKi9cclxuICBcclxuICAvKiBzZWN0aW9uIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfSAqL1xyXG4gIFxyXG4gIC8qIE5BVklHQVRJT04gKi9cclxuICBuYXYge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogYmx1ZXZpb2xldDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggI2RlZGVkZTtcclxuICAgIFxyXG4gIH1cclxuICBuYXYgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgbmF2IHVsIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgbmF2IHVsIGxpIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICB9XHJcbiAgbmF2IHVsIGxpIGEsXHJcbiAgbmF2IHVsIGxpIGE6YWZ0ZXIsXHJcbiAgbmF2IHVsIGxpIGE6YmVmb3JlIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjI4cztcclxuICB9XHJcbiAgbmF2IHVsIGxpIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYig4NSwgODUsIDg1KTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogU0hJRlQgKi9cclxuICBuYXYuc2hpZnQgdWwgbGkgYSB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIG5hdi5zaGlmdCB1bCBsaSBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiB5ZWxsb3c7XHJcbiAgfVxyXG4gIG5hdi5zaGlmdCB1bCBsaSBhOmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGNvbnRlbnQ6ICcuJztcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgdmlzaWJpbGl0eTogbm9uZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcbiAgbmF2LnNoaWZ0IHVsIGxpIGE6aG92ZXI6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qIEtleWZyYW1lcyAqL1xyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmaWxsIHtcclxuICAgIDAlIHtcclxuICAgICAgd2lkdGg6IDAlO1xyXG4gICAgICBoZWlnaHQ6IDFweDtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDFweDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKiBLZXlmcmFtZXMgKi9cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgY2lyY2xlIHtcclxuICAgIDAlIHtcclxuICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjYWFhO1xyXG4gICAgICBoZWlnaHQ6IDUwMDAlO1xyXG4gICAgICB3aWR0aDogNTAwMCU7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuICB9XHJcbiBcclxuXHJcblxyXG4gXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service.service */ "./src/app/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AppComponent = class AppComponent {
    constructor(ds, route, router) {
        this.ds = ds;
        this.route = route;
        this.router = router;
        this.title = 'Assignment';
        this.username = this.ds.getUsername();
    }
    ngOnInit() {
        this.ds.getSubjects().subscribe(data => {
            this.danhmuc = data;
        });
    }
    logOut() {
        localStorage.removeItem('token');
        this.username = '';
        this.router.navigate(['/trangchu']);
        alert('bạn đã đăng xuất');
    }
};
AppComponent.ctorParameters = () => [
    { type: _service_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        providers: [_service_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]],
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _trangchu_trangchu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trangchu/trangchu.component */ "./src/app/trangchu/trangchu.component.ts");
/* harmony import */ var _gioithieu_gioithieu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gioithieu/gioithieu.component */ "./src/app/gioithieu/gioithieu.component.ts");
/* harmony import */ var _gopy_gopy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gopy/gopy.component */ "./src/app/gopy/gopy.component.ts");
/* harmony import */ var _hoidap_hoidap_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hoidap/hoidap.component */ "./src/app/hoidap/hoidap.component.ts");
/* harmony import */ var _dangki_dangki_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dangki/dangki.component */ "./src/app/dangki/dangki.component.ts");
/* harmony import */ var _dangnhap_dangnhap_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dangnhap/dangnhap.component */ "./src/app/dangnhap/dangnhap.component.ts");
/* harmony import */ var _doimatkhau_doimatkhau_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./doimatkhau/doimatkhau.component */ "./src/app/doimatkhau/doimatkhau.component.ts");
/* harmony import */ var _suadoitaikhoan_suadoitaikhoan_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./suadoitaikhoan/suadoitaikhoan.component */ "./src/app/suadoitaikhoan/suadoitaikhoan.component.ts");
/* harmony import */ var _danhmucmonhoc_danhmucmonhoc_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./danhmucmonhoc/danhmucmonhoc.component */ "./src/app/danhmucmonhoc/danhmucmonhoc.component.ts");
/* harmony import */ var _lienhe_lienhe_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lienhe/lienhe.component */ "./src/app/lienhe/lienhe.component.ts");
/* harmony import */ var _quenmatkhau_quenmatkhau_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./quenmatkhau/quenmatkhau.component */ "./src/app/quenmatkhau/quenmatkhau.component.ts");
/* harmony import */ var _thi_tn_thi_tn_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./thi-tn/thi-tn.component */ "./src/app/thi-tn/thi-tn.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _editinfo_editinfo_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./editinfo/editinfo.component */ "./src/app/editinfo/editinfo.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./result/result.component */ "./src/app/result/result.component.ts");
/* harmony import */ var auth_auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! auth/auth.guard */ "./auth/auth.guard.ts");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/fesm2015/ngx-countdown.js");





 // phân trang


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _trangchu_trangchu_component__WEBPACK_IMPORTED_MODULE_7__["TrangchuComponent"],
            _gioithieu_gioithieu_component__WEBPACK_IMPORTED_MODULE_8__["GioithieuComponent"],
            _gopy_gopy_component__WEBPACK_IMPORTED_MODULE_9__["GopyComponent"],
            _hoidap_hoidap_component__WEBPACK_IMPORTED_MODULE_10__["HoidapComponent"],
            _dangki_dangki_component__WEBPACK_IMPORTED_MODULE_11__["DangkiComponent"],
            _dangnhap_dangnhap_component__WEBPACK_IMPORTED_MODULE_12__["DangnhapComponent"],
            _doimatkhau_doimatkhau_component__WEBPACK_IMPORTED_MODULE_13__["DoimatkhauComponent"],
            _suadoitaikhoan_suadoitaikhoan_component__WEBPACK_IMPORTED_MODULE_14__["SuadoitaikhoanComponent"],
            _danhmucmonhoc_danhmucmonhoc_component__WEBPACK_IMPORTED_MODULE_15__["DanhmucmonhocComponent"],
            _lienhe_lienhe_component__WEBPACK_IMPORTED_MODULE_16__["LienheComponent"],
            _quenmatkhau_quenmatkhau_component__WEBPACK_IMPORTED_MODULE_17__["QuenmatkhauComponent"],
            _thi_tn_thi_tn_component__WEBPACK_IMPORTED_MODULE_18__["ThiTnComponent"],
            _editinfo_editinfo_component__WEBPACK_IMPORTED_MODULE_20__["EditinfoComponent"],
            _result_result_component__WEBPACK_IMPORTED_MODULE_21__["ResultComponent"],
        ],
        imports: [
            ngx_countdown__WEBPACK_IMPORTED_MODULE_23__["CountdownModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                { path: '', component: _trangchu_trangchu_component__WEBPACK_IMPORTED_MODULE_7__["TrangchuComponent"] },
                { path: 'trangchu', component: _trangchu_trangchu_component__WEBPACK_IMPORTED_MODULE_7__["TrangchuComponent"] },
                { path: 'dangki', component: _dangki_dangki_component__WEBPACK_IMPORTED_MODULE_11__["DangkiComponent"] },
                { path: 'dangnhap', component: _dangnhap_dangnhap_component__WEBPACK_IMPORTED_MODULE_12__["DangnhapComponent"] },
                { path: 'lienhe', component: _lienhe_lienhe_component__WEBPACK_IMPORTED_MODULE_16__["LienheComponent"] },
                { path: 'danhmucmonhoc', component: _danhmucmonhoc_danhmucmonhoc_component__WEBPACK_IMPORTED_MODULE_15__["DanhmucmonhocComponent"] },
                { path: 'doimatkhau', component: _doimatkhau_doimatkhau_component__WEBPACK_IMPORTED_MODULE_13__["DoimatkhauComponent"] },
                { path: 'quenmatkhau', component: _quenmatkhau_quenmatkhau_component__WEBPACK_IMPORTED_MODULE_17__["QuenmatkhauComponent"] },
                { path: 'gioithieu', component: _gioithieu_gioithieu_component__WEBPACK_IMPORTED_MODULE_8__["GioithieuComponent"] },
                { path: 'gopy', component: _gopy_gopy_component__WEBPACK_IMPORTED_MODULE_9__["GopyComponent"] },
                { path: 'hoidap', component: _hoidap_hoidap_component__WEBPACK_IMPORTED_MODULE_10__["HoidapComponent"] },
                { path: 'suadoitaikhoan', component: _editinfo_editinfo_component__WEBPACK_IMPORTED_MODULE_20__["EditinfoComponent"] },
                {
                    path: 'thiTN/:Id', component: _thi_tn_thi_tn_component__WEBPACK_IMPORTED_MODULE_18__["ThiTnComponent"], canActivate: [auth_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]]
                },
                { path: 'result', component: _result_result_component__WEBPACK_IMPORTED_MODULE_21__["ResultComponent"] },
                { path: '**', redirectTo: 'trangchu', pathMatch: 'full' },
            ])
        ],
        providers: [auth_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dangki/dangki.component.css":
/*!*********************************************!*\
  !*** ./src/app/dangki/dangki.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i{\r\n  margin-right: 4px;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFuZ2tpL2RhbmdraS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCOztBQUVuQiIsImZpbGUiOiJzcmMvYXBwL2RhbmdraS9kYW5na2kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIml7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/dangki/dangki.component.ts":
/*!********************************************!*\
  !*** ./src/app/dangki/dangki.component.ts ***!
  \********************************************/
/*! exports provided: DangkiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DangkiComponent", function() { return DangkiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DangkiComponent = class DangkiComponent {
    constructor(ds, router) {
        this.ds = ds;
        this.router = router;
        this.formStudent = {
            username: null,
            password: null,
            email: null,
        };
    }
    ngOnInit() {
    }
    Addthongtin(studentForm) {
        this.ds.postRegister(studentForm.value).subscribe(data => {
            if (data['message']) {
                alert('user đã tồn tại');
                // console.log(data);
            }
            else {
                console.log(data.constructor());
                alert('đã đăng ký thành công');
                this.router.navigate(['/dangnhap']);
                studentForm.reset();
            }
        });
    }
};
DangkiComponent.ctorParameters = () => [
    { type: _service_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DangkiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dangki',
        template: __webpack_require__(/*! raw-loader!./dangki.component.html */ "./node_modules/raw-loader/index.js!./src/app/dangki/dangki.component.html"),
        styles: [__webpack_require__(/*! ./dangki.component.css */ "./src/app/dangki/dangki.component.css")]
    })
], DangkiComponent);



/***/ }),

/***/ "./src/app/dangnhap/dangnhap.component.css":
/*!*************************************************!*\
  !*** ./src/app/dangnhap/dangnhap.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.input-container { /* IE10 */\r\n  display: flex;\r\n  width: 100%;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.icon {\r\n  padding: 10px;\r\n  background: dodgerblue;\r\n  color: white;\r\n  min-width: 50px;\r\n  text-align: center;\r\n}\r\n\r\n.input-field {\r\n  width: 100%;\r\n  padding: 10px;\r\n  outline: none;\r\n}\r\n\r\n.input-field:focus {\r\n  border: 2px solid dodgerblue;\r\n}\r\n\r\n/* Set a style for the submit button */\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFuZ25oYXAvZGFuZ25oYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsbUJBQ3dCLFNBQVM7RUFDL0IsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUEsc0NBQXNDIiwiZmlsZSI6InNyYy9hcHAvZGFuZ25oYXAvZGFuZ25oYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaW5wdXQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDsgLyogSUUxMCAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWluLXdpZHRoOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZDpmb2N1cyB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZG9kZ2VyYmx1ZTtcclxufVxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQgYnV0dG9uICovXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/dangnhap/dangnhap.component.ts":
/*!************************************************!*\
  !*** ./src/app/dangnhap/dangnhap.component.ts ***!
  \************************************************/
/*! exports provided: DangnhapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DangnhapComponent", function() { return DangnhapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");





let DangnhapComponent = class DangnhapComponent {
    constructor(route, router, location, ds) {
        this.route = route;
        this.router = router;
        this.location = location;
        this.ds = ds;
    }
    ngOnInit() {
    }
    login(formLogin) {
        console.log('form.value=', formLogin.value);
        this.ds.postAuthenticate(formLogin.value).subscribe(
        //data tức là trả về token
        //err tức là trả error hoặc info, bởi vì 2 thằng này đều có mã là 4xx(mã lỗi) 
        data => {
            localStorage.setItem('token', data['token']);
            this.router.navigate(['/trangchu']);
        }, err => {
            alert(err.error.message);
        });
    }
};
DangnhapComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
DangnhapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dangnhap',
        template: __webpack_require__(/*! raw-loader!./dangnhap.component.html */ "./node_modules/raw-loader/index.js!./src/app/dangnhap/dangnhap.component.html"),
        styles: [__webpack_require__(/*! ./dangnhap.component.css */ "./src/app/dangnhap/dangnhap.component.css")]
    })
], DangnhapComponent);



/***/ }),

/***/ "./src/app/danhmucmonhoc/danhmucmonhoc.component.css":
/*!***********************************************************!*\
  !*** ./src/app/danhmucmonhoc/danhmucmonhoc.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhbmhtdWNtb25ob2MvZGFuaG11Y21vbmhvYy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/danhmucmonhoc/danhmucmonhoc.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/danhmucmonhoc/danhmucmonhoc.component.ts ***!
  \**********************************************************/
/*! exports provided: DanhmucmonhocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhmucmonhocComponent", function() { return DanhmucmonhocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DanhmucmonhocComponent = class DanhmucmonhocComponent {
    constructor() { }
    ngOnInit() {
    }
};
DanhmucmonhocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-danhmucmonhoc',
        template: __webpack_require__(/*! raw-loader!./danhmucmonhoc.component.html */ "./node_modules/raw-loader/index.js!./src/app/danhmucmonhoc/danhmucmonhoc.component.html"),
        styles: [__webpack_require__(/*! ./danhmucmonhoc.component.css */ "./src/app/danhmucmonhoc/danhmucmonhoc.component.css")]
    })
], DanhmucmonhocComponent);



/***/ }),

/***/ "./src/app/doimatkhau/doimatkhau.component.css":
/*!*****************************************************!*\
  !*** ./src/app/doimatkhau/doimatkhau.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i{\r\n    margin-right: 4px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9pbWF0a2hhdS9kb2ltYXRraGF1LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9kb2ltYXRraGF1L2RvaW1hdGtoYXUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIml7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/doimatkhau/doimatkhau.component.ts":
/*!****************************************************!*\
  !*** ./src/app/doimatkhau/doimatkhau.component.ts ***!
  \****************************************************/
/*! exports provided: DoimatkhauComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoimatkhauComponent", function() { return DoimatkhauComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let DoimatkhauComponent = class DoimatkhauComponent {
    constructor(ds, router, route, http) {
        this.ds = ds;
        this.router = router;
        this.route = route;
        this.http = http;
    }
    ngOnInit() {
        this._id = this.ds.getId();
    }
    DoiMatKhau(formControl) {
        console.log('_id', this._id);
        this.ds.postDoiMauKhau(this._id, formControl.value).subscribe(data => {
            console.log(data);
            alert('đã đổi');
            this.router.navigate(['/trangchu']);
        });
        //data tức là trả về token <=> đúng
        //err tức là trả error hoặc info, bởi vì 2 thằng này đều có mã là 4xx(mã lỗi)
    }
};
DoimatkhauComponent.ctorParameters = () => [
    { type: _service_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
DoimatkhauComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doimatkhau',
        template: __webpack_require__(/*! raw-loader!./doimatkhau.component.html */ "./node_modules/raw-loader/index.js!./src/app/doimatkhau/doimatkhau.component.html"),
        styles: [__webpack_require__(/*! ./doimatkhau.component.css */ "./src/app/doimatkhau/doimatkhau.component.css")]
    })
], DoimatkhauComponent);



/***/ }),

/***/ "./src/app/editinfo/editinfo.component.css":
/*!*************************************************!*\
  !*** ./src/app/editinfo/editinfo.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRpbmZvL2VkaXRpbmZvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/editinfo/editinfo.component.ts":
/*!************************************************!*\
  !*** ./src/app/editinfo/editinfo.component.ts ***!
  \************************************************/
/*! exports provided: EditinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditinfoComponent", function() { return EditinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");



let EditinfoComponent = class EditinfoComponent {
    constructor(ds) {
        this.ds = ds;
    }
    ngOnInit() {
        this.username = this.ds.getUsername();
    }
    luuThayDoi(formControl) {
        formControl.reset();
        alert('đã thay đổi thành công!');
    }
};
EditinfoComponent.ctorParameters = () => [
    { type: _service_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
EditinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editinfo',
        template: __webpack_require__(/*! raw-loader!./editinfo.component.html */ "./node_modules/raw-loader/index.js!./src/app/editinfo/editinfo.component.html"),
        styles: [__webpack_require__(/*! ./editinfo.component.css */ "./src/app/editinfo/editinfo.component.css")]
    })
], EditinfoComponent);



/***/ }),

/***/ "./src/app/gioithieu/gioithieu.component.css":
/*!***************************************************!*\
  !*** ./src/app/gioithieu/gioithieu.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpb2l0aGlldS9naW9pdGhpZXUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/gioithieu/gioithieu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/gioithieu/gioithieu.component.ts ***!
  \**************************************************/
/*! exports provided: GioithieuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GioithieuComponent", function() { return GioithieuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GioithieuComponent = class GioithieuComponent {
    constructor() { }
    ngOnInit() {
    }
};
GioithieuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gioithieu',
        template: __webpack_require__(/*! raw-loader!./gioithieu.component.html */ "./node_modules/raw-loader/index.js!./src/app/gioithieu/gioithieu.component.html"),
        styles: [__webpack_require__(/*! ./gioithieu.component.css */ "./src/app/gioithieu/gioithieu.component.css")]
    })
], GioithieuComponent);



/***/ }),

/***/ "./src/app/gopy/gopy.component.css":
/*!*****************************************!*\
  !*** ./src/app/gopy/gopy.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvcHkvZ29weS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/gopy/gopy.component.ts":
/*!****************************************!*\
  !*** ./src/app/gopy/gopy.component.ts ***!
  \****************************************/
/*! exports provided: GopyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GopyComponent", function() { return GopyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GopyComponent = class GopyComponent {
    constructor() { }
    ngOnInit() {
    }
};
GopyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gopy',
        template: __webpack_require__(/*! raw-loader!./gopy.component.html */ "./node_modules/raw-loader/index.js!./src/app/gopy/gopy.component.html"),
        styles: [__webpack_require__(/*! ./gopy.component.css */ "./src/app/gopy/gopy.component.css")]
    })
], GopyComponent);



/***/ }),

/***/ "./src/app/hoidap/hoidap.component.css":
/*!*********************************************!*\
  !*** ./src/app/hoidap/hoidap.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvaWRhcC9ob2lkYXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/hoidap/hoidap.component.ts":
/*!********************************************!*\
  !*** ./src/app/hoidap/hoidap.component.ts ***!
  \********************************************/
/*! exports provided: HoidapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoidapComponent", function() { return HoidapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HoidapComponent = class HoidapComponent {
    constructor() { }
    ngOnInit() {
    }
};
HoidapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hoidap',
        template: __webpack_require__(/*! raw-loader!./hoidap.component.html */ "./node_modules/raw-loader/index.js!./src/app/hoidap/hoidap.component.html"),
        styles: [__webpack_require__(/*! ./hoidap.component.css */ "./src/app/hoidap/hoidap.component.css")]
    })
], HoidapComponent);



/***/ }),

/***/ "./src/app/lienhe/lienhe.component.css":
/*!*********************************************!*\
  !*** ./src/app/lienhe/lienhe.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {font-family: Arial, Helvetica, sans-serif;}\r\n* {box-sizing: border-box;}\r\ninput[type=text], select, textarea {\r\n  width: 100%;\r\n  padding: 12px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n  margin-top: 6px;\r\n  margin-bottom: 16px;\r\n  resize: vertical;\r\n}\r\ninput[type=submit] {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 12px 20px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\ninput[type=submit]:hover {\r\n  background-color: #45a049;\r\n}\r\n.container {\r\n  border-radius: 5px;\r\n  background-color: #f2f2f2;\r\n  padding: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGllbmhlL2xpZW5oZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0seUNBQXlDLENBQUM7QUFDaEQsR0FBRyxzQkFBc0IsQ0FBQztBQUUxQjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2xpZW5oZS9saWVuaGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge2ZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO31cclxuKiB7Ym94LXNpemluZzogYm9yZGVyLWJveDt9XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLCBzZWxlY3QsIHRleHRhcmVhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgcGFkZGluZzogMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/lienhe/lienhe.component.ts":
/*!********************************************!*\
  !*** ./src/app/lienhe/lienhe.component.ts ***!
  \********************************************/
/*! exports provided: LienheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LienheComponent", function() { return LienheComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LienheComponent = class LienheComponent {
    constructor() { }
    ngOnInit() {
    }
    onSubmit() {
        this.firstname = "";
        this.lastname = "";
        this.subject = "";
        alert('đã gửi');
    }
};
LienheComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lienhe',
        template: __webpack_require__(/*! raw-loader!./lienhe.component.html */ "./node_modules/raw-loader/index.js!./src/app/lienhe/lienhe.component.html"),
        styles: [__webpack_require__(/*! ./lienhe.component.css */ "./src/app/lienhe/lienhe.component.css")]
    })
], LienheComponent);



/***/ }),

/***/ "./src/app/quenmatkhau/quenmatkhau.component.css":
/*!*******************************************************!*\
  !*** ./src/app/quenmatkhau/quenmatkhau.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i{\r\n    margin-right:4px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlbm1hdGtoYXUvcXVlbm1hdGtoYXUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3F1ZW5tYXRraGF1L3F1ZW5tYXRraGF1LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpe1xyXG4gICAgbWFyZ2luLXJpZ2h0OjRweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/quenmatkhau/quenmatkhau.component.ts":
/*!******************************************************!*\
  !*** ./src/app/quenmatkhau/quenmatkhau.component.ts ***!
  \******************************************************/
/*! exports provided: QuenmatkhauComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuenmatkhauComponent", function() { return QuenmatkhauComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");



let QuenmatkhauComponent = class QuenmatkhauComponent {
    constructor(ds) {
        this.ds = ds;
        this.hiddenbaoloi = true;
        this.hiddenshowpass = true;
        this.formSudent = {
            username: '',
            email: ''
        };
    }
    ngOnInit() {
    }
    HienThiMatKhau(form) {
        this.ds.postQuenMatKhau(form.value).subscribe(data => {
            if (data['password']) {
                console.log(`this.form.value`, form.value);
                this.password = data['password'];
                alert(this.password);
            }
            else if (data['message']) {
                alert(data['message']);
            }
        });
    }
};
QuenmatkhauComponent.ctorParameters = () => [
    { type: _service_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
QuenmatkhauComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quenmatkhau',
        template: __webpack_require__(/*! raw-loader!./quenmatkhau.component.html */ "./node_modules/raw-loader/index.js!./src/app/quenmatkhau/quenmatkhau.component.html"),
        styles: [__webpack_require__(/*! ./quenmatkhau.component.css */ "./src/app/quenmatkhau/quenmatkhau.component.css")]
    })
], QuenmatkhauComponent);



/***/ }),

/***/ "./src/app/result/result.component.css":
/*!*********************************************!*\
  !*** ./src/app/result/result.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/result/result.component.ts":
/*!********************************************!*\
  !*** ./src/app/result/result.component.ts ***!
  \********************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ResultComponent = class ResultComponent {
    constructor() { }
    ngOnInit() {
    }
};
ResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-result',
        template: __webpack_require__(/*! raw-loader!./result.component.html */ "./node_modules/raw-loader/index.js!./src/app/result/result.component.html"),
        styles: [__webpack_require__(/*! ./result.component.css */ "./src/app/result/result.component.css")]
    })
], ResultComponent);



/***/ }),

/***/ "./src/app/service.service.ts":
/*!************************************!*\
  !*** ./src/app/service.service.ts ***!
  \************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.url = "http://localhost:1234/";
        //==============END BackEnd NOdeJS==============
        this.students = [
            {
                "username": "teonv",
                "password": "iloveyou",
                "fullname": "Nguyễn Văn Tèo",
                "email": "teonv@fpt.edu.vn",
                "gender": "true",
                "birthday": "1995-12-21",
                "schoolfee": "1500000",
                "marks": "0",
                "id": 0
            },
            {
                "username": "pheonv",
                "password": "iloveyou",
                "fullname": "Nguyễn Văn Chí Phèo",
                "email": "pheonv@fpt.edu.vn",
                "gender": "true",
                "birthday": "1985-10-11",
                "schoolfee": "2500000",
                "marks": "0",
                "id": 1
            },
            {
                "username": "nopt",
                "password": "iloveyou",
                "fullname": "Phạm Thị Nở",
                "email": "nopt@fpt.edu.vn",
                "gender": "false",
                "birthday": "1993-05-15",
                "schoolfee": "2000000",
                "marks": "0",
                "id": 2
            }
        ];
        this.urlSubject = "../assets/Subjects.json";
        this.urlQuiz = "../assets/Quizs";
        this.urlStudents = "../assets/Students.json";
        //xác định xem đã đăng nhập hay chưa:
        this.logged = false;
    }
    //==============cách làm BackEnd NOdeJS==============
    postRegister(user) {
        return this.http.post("api/register", user);
    }
    postAuthenticate(authCredentials) {
        return this.http.post("api/authenticate", authCredentials);
    }
    postQuenMatKhau(thongtinUserNameAndEmail) {
        return this.http.post("api/quenmatkhau", thongtinUserNameAndEmail);
    }
    postDoiMauKhau(_id, formValue) {
        return this.http.put("api/updateUser/" + _id, formValue);
    }
    getSubjects() {
        return this.http.get(this.urlSubject);
    }
    getQuiz(Id) {
        // return this.http.get(this.urlQuiz + `/${Id}.json`)
        return this.http.get(`${this.urlQuiz}/${Id}.json`);
    }
    getStudents() {
        return this.http.get(this.urlStudents);
    }
    getUsername() {
        if (!localStorage.getItem('token')) {
            return "";
        }
        let payload = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
        return payload['username'];
    }
    getId() {
        if (!localStorage.getItem('token')) {
            return "";
        }
        let payload = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
        return payload['_id'];
    }
    getUserPayLoad() {
        var token = localStorage.getItem('token');
        //TH nếu có token
        if (token) {
            var userPayload = atob(token.split('.')[1]);
            //nhận vào một chuỗi JSON và chuyển đổi (transform) nó thành một đối tượng JavaScript.
            return JSON.parse(userPayload);
        }
        //nếu k có token thì trả về null
        return null;
    }
    isLoggedIn() {
        //lấy userPayload từ token trong localStorage
        var userPayload = this.getUserPayLoad();
        //nếu k có userPayload <=> k có token <=> chưa đăng nhập
        if (!userPayload) {
            return false;
        }
        //lấy userPayLoad để check xem còn thời hạn hay k
        else {
            if (userPayload.exp > Date.now() / 1000) {
                return true;
            }
            return false;
        }
    }
    themTaiKhoan(s) {
        this.students.push(s);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/suadoitaikhoan/suadoitaikhoan.component.css":
/*!*************************************************************!*\
  !*** ./src/app/suadoitaikhoan/suadoitaikhoan.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YWRvaXRhaWtob2FuL3N1YWRvaXRhaWtob2FuLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/suadoitaikhoan/suadoitaikhoan.component.ts":
/*!************************************************************!*\
  !*** ./src/app/suadoitaikhoan/suadoitaikhoan.component.ts ***!
  \************************************************************/
/*! exports provided: SuadoitaikhoanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuadoitaikhoanComponent", function() { return SuadoitaikhoanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");



let SuadoitaikhoanComponent = class SuadoitaikhoanComponent {
    constructor(ds) {
        this.ds = ds;
        this.formSudent = {
            id: 0,
            username: "",
            fullname: "",
            email: "",
            password: "",
            gender: "",
            birthday: new Date().toISOString().substring(0, 10),
        };
        this.selectStudentId = -1;
    }
    ngOnInit() {
        this.students = this.ds.students;
    }
    ShowEditStudent(student) {
        this.formSudent = {
            id: student.id,
            username: student.username,
            fullname: student.fullname,
            email: student.email,
            password: student.password,
            gender: student.gender,
            birthday: new Date().toISOString().substring(0, 10),
        };
        this.selectStudentId = this.formSudent.id;
    }
    SaveStudentEdit(id) {
        let index = this.students.indexOf(this.students.find(sv => sv.id === id));
        this.students[index] = Object.assign(this.formSudent);
        this.selectStudentId = -1;
        this.formSudent = {
            id: 0,
            username: "",
            fullname: "",
            email: "",
            password: "",
            gender: "",
            birthday: new Date().toISOString().substring(0, 10),
        };
    }
};
SuadoitaikhoanComponent.ctorParameters = () => [
    { type: _service_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
SuadoitaikhoanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-suadoitaikhoan',
        template: __webpack_require__(/*! raw-loader!./suadoitaikhoan.component.html */ "./node_modules/raw-loader/index.js!./src/app/suadoitaikhoan/suadoitaikhoan.component.html"),
        styles: [__webpack_require__(/*! ./suadoitaikhoan.component.css */ "./src/app/suadoitaikhoan/suadoitaikhoan.component.css")]
    })
], SuadoitaikhoanComponent);



/***/ }),

/***/ "./src/app/thi-tn/thi-tn.component.css":
/*!*********************************************!*\
  !*** ./src/app/thi-tn/thi-tn.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-radio-group {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 15px 0;\r\n  }\r\n  \r\n  .example-radio-button {\r\n    margin: 5px;\r\n  }\r\n  \r\n  /* CSS radio button */\r\n  \r\n  /* The container */\r\n  \r\n  .container {\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 35px;\r\n  margin-bottom: 12px;\r\n  cursor: pointer;\r\n  font-size: 16px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n  \r\n  /* Hide the browser's default radio button */\r\n  \r\n  .container input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n}\r\n  \r\n  /* Create a custom radio button */\r\n  \r\n  .checkmark {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #eee;\r\n  border-radius: 50%;\r\n}\r\n  \r\n  /* On mouse-over, add a grey background color */\r\n  \r\n  .container:hover input ~ .checkmark {\r\n  background-color: #ccc;\r\n}\r\n  \r\n  /* When the radio button is checked, add a blue background */\r\n  \r\n  .container input:checked ~ .checkmark {\r\n  background-color: #2196F3;\r\n}\r\n  \r\n  /* Create the indicator (the dot/circle - hidden when not checked) */\r\n  \r\n  .checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n  \r\n  /* Show the indicator (dot/circle) when checked */\r\n  \r\n  .container input:checked ~ .checkmark:after {\r\n  display: block;\r\n}\r\n  \r\n  /* Style the indicator (dot/circle) */\r\n  \r\n  .container .checkmark:after {\r\n \ttop: 9px;\r\n\tleft: 9px;\r\n\twidth: 8px;\r\n\theight: 8px;\r\n\tborder-radius: 50%;\r\n\tbackground: white;\r\n}\r\n  \r\n  .xanhla{\r\n  background: green;\r\n}\r\n  \r\n  .do{\r\n  background: red;\r\n}\r\n  \r\n  /* progress */\r\n  \r\n  #myProgress {\r\n  width: 100%;\r\n  height: 30px;\r\n  position: relative;\r\n  background-color: #ddd;\r\n}\r\n  \r\n  #myBar {\r\n  background-color: #4CAF50;\r\n  width: 10px;\r\n  height: 30px;\r\n  position: absolute;\r\n}\r\n  \r\n  .fa-check-circle{\r\n  /* color:greenyellow; */\r\n  font-size: 20px;\r\n}\r\n  \r\n  .fa.fa-times{\r\n  font-size:20px\r\n}\r\n  \r\n  /* đồng hồ mới */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhpLXRuL3RoaS10bi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBLHFCQUFxQjs7RUFDdkIsa0JBQWtCOztFQUNsQjtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7RUFFQSw0Q0FBNEM7O0VBQzVDO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztFQUVBLGlDQUFpQzs7RUFDakM7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0VBRUEsK0NBQStDOztFQUMvQztFQUNFLHNCQUFzQjtBQUN4Qjs7RUFFQSw0REFBNEQ7O0VBQzVEO0VBQ0UseUJBQXlCO0FBQzNCOztFQUVBLG9FQUFvRTs7RUFDcEU7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7RUFFQSxpREFBaUQ7O0VBQ2pEO0VBQ0UsY0FBYztBQUNoQjs7RUFFQSxxQ0FBcUM7O0VBQ3JDO0VBQ0UsUUFBUTtDQUNULFNBQVM7Q0FDVCxVQUFVO0NBQ1YsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixpQkFBaUI7QUFDbEI7O0VBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0VBQ0E7RUFDRSxlQUFlO0FBQ2pCOztFQUVBLGFBQWE7O0VBQ2I7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0VBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0VBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7RUFDQTtFQUNFO0FBQ0Y7O0VBQ0EsZ0JBQWdCIiwiZmlsZSI6InNyYy9hcHAvdGhpLXRuL3RoaS10bi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH1cclxuICBcclxuICAvKiBDU1MgcmFkaW8gYnV0dG9uICovXHJcbi8qIFRoZSBjb250YWluZXIgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctbGVmdDogMzVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgcmFkaW8gYnV0dG9uICovXHJcbi5jb250YWluZXIgaW5wdXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgY3VzdG9tIHJhZGlvIGJ1dHRvbiAqL1xyXG4uY2hlY2ttYXJrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cclxuLmNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcbi8qIFdoZW4gdGhlIHJhZGlvIGJ1dHRvbiBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cclxuLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBpbmRpY2F0b3IgKHRoZSBkb3QvY2lyY2xlIC0gaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXHJcbi5jaGVja21hcms6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFNob3cgdGhlIGluZGljYXRvciAoZG90L2NpcmNsZSkgd2hlbiBjaGVja2VkICovXHJcbi5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgaW5kaWNhdG9yIChkb3QvY2lyY2xlKSAqL1xyXG4uY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xyXG4gXHR0b3A6IDlweDtcclxuXHRsZWZ0OiA5cHg7XHJcblx0d2lkdGg6IDhweDtcclxuXHRoZWlnaHQ6IDhweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0YmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi54YW5obGF7XHJcbiAgYmFja2dyb3VuZDogZ3JlZW47XHJcbn1cclxuLmRve1xyXG4gIGJhY2tncm91bmQ6IHJlZDtcclxufVxyXG5cclxuLyogcHJvZ3Jlc3MgKi9cclxuI215UHJvZ3Jlc3Mge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuI215QmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmZhLWNoZWNrLWNpcmNsZXtcclxuICAvKiBjb2xvcjpncmVlbnllbGxvdzsgKi9cclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmZhLmZhLXRpbWVze1xyXG4gIGZvbnQtc2l6ZToyMHB4XHJcbn1cclxuLyogxJHhu5NuZyBo4buTIG3hu5tpICovXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/thi-tn/thi-tn.component.ts":
/*!********************************************!*\
  !*** ./src/app/thi-tn/thi-tn.component.ts ***!
  \********************************************/
/*! exports provided: ThiTnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThiTnComponent", function() { return ThiTnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ThiTnComponent = class ThiTnComponent {
    //END đếm giờ
    constructor(ds, route, router) {
        this.ds = ds;
        this.route = route;
        this.router = router;
        this.dapAnUser = null;
        this.cur = 1;
        this.mark = 0;
        this.disableButtonNext = true;
        this.disableInput = false;
        this.disableSubmit = false;
        this.xanhla = false;
        this.config = { leftTime: 2000 };
        this.soCauLamSai = 0;
        this.thongBaoChonDung = false;
        this.thongBaoChonSai = false;
    }
    handleEvent2(e) {
        this.text = e.action;
        console.log(e);
        if (e.action == "done") {
            alert('hết giờ rồi ^^, điểm của bạn là: ' + this.mark);
            this.disableSubmit = true;
            this.disableInput = true;
            this.disableButtonNext = true;
        }
    }
    ngOnInit() {
        //tìm tên môn học:
        this.ds.getSubjects().subscribe(data => {
            this.ds.subjects = data;
            this.route.paramMap.subscribe(params => {
                this.Id = params.get('Id');
                this.subject = this.ds.subjects.find(x => {
                    return x.Id == this.Id;
                });
                this.tenMonHoc = this.subject.Name;
                //END tìm tên mon học
                //tìm những câu hỏi:
                this.ds.getQuiz(this.Id).subscribe(data => {
                    this.Quizs = data;
                });
            });
        });
    }
    submit(quiz) {
        //TH chưa chọn đáp án :
        if (this.dapAnUser == null) {
            alert('bạn chưa chọn đáp án');
            this.chuaChonDapAn = true;
        }
        //TH submit và chọn đáp án rồi
        //chọn đáp án+ấn submit rồi mới cho chọn nút next
        else {
            this.chuaChonDapAn = false;
            this.disableButtonNext = false;
            this.disableSubmit = true;
            this.disableInput = true;
            if (quiz.AnswerId == +this.dapAnUser) {
                // alert('đúng rồi')
                this.mark++;
                this.thongBaoChonDung = true;
            }
            else {
                // alert('sai roi');
                this.thongBaoChonSai = true;
                this.soCauLamSai++;
            }
            console.log(typeof this.dapAnUser);
            this.isSubmited = true;
            this.backUpDapAnUser = this.dapAnUser;
        }
        // if(this.dapAnUser==this.Quizs[this.i].AnswerId){
        //   alert('bạn làm đung rồi')
        // }
        // else{
        //   alert('sai rồi ');
        // }
    }
    Next() {
        this.dapAnUser = null;
        this.cur++;
        this.disableButtonNext = true; //disable Next lại
        this.disableSubmit = false; //tắt disable submit
        this.disableInput = false; //tắt disable INput
        this.isSubmited = false;
        this.thongBaoChonDung = false; //ẩn thông báo chọn đúng
        this.thongBaoChonSai = false;
    }
    timCauDung(dapAnDung, dapAn) {
        if (dapAnDung == dapAn && this.isSubmited == true) {
            return true;
        }
        return false;
    }
    timCauSai(dapAnDung, dapAn) {
        if (dapAnDung != dapAn && this.isSubmited == true && dapAn == +this.backUpDapAnUser) {
            return true;
        }
        return false;
    }
    countdown2() {
        var elem = document.getElementById("myBar");
        var width = 0;
        var id = setInterval(frame, 10);
        function frame() {
            if (width == 100) {
                clearInterval(id);
            }
            else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
};
ThiTnComponent.ctorParameters = () => [
    { type: _service_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ThiTnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-thi-tn',
        template: __webpack_require__(/*! raw-loader!./thi-tn.component.html */ "./node_modules/raw-loader/index.js!./src/app/thi-tn/thi-tn.component.html"),
        styles: [__webpack_require__(/*! ./thi-tn.component.css */ "./src/app/thi-tn/thi-tn.component.css")]
    })
], ThiTnComponent);



/***/ }),

/***/ "./src/app/trangchu/trangchu.component.css":
/*!*************************************************!*\
  !*** ./src/app/trangchu/trangchu.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " /* MARQUEE\r\n marquee{\r\n  font-family: 'Amarante';font-size: 20px;\r\n\r\n} */\r\n\r\n/* END MARQUEE */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbmdjaHUvdHJhbmdjaHUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQzs7OztHQUlFOztBQUVILGdCQUFnQiIsImZpbGUiOiJzcmMvYXBwL3RyYW5nY2h1L3RyYW5nY2h1LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLyogTUFSUVVFRVxyXG4gbWFycXVlZXtcclxuICBmb250LWZhbWlseTogJ0FtYXJhbnRlJztmb250LXNpemU6IDIwcHg7XHJcblxyXG59ICovXHJcblxyXG4vKiBFTkQgTUFSUVVFRSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/trangchu/trangchu.component.ts":
/*!************************************************!*\
  !*** ./src/app/trangchu/trangchu.component.ts ***!
  \************************************************/
/*! exports provided: TrangchuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangchuComponent", function() { return TrangchuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let TrangchuComponent = class TrangchuComponent {
    // public tenTK=this.y.username;
    constructor(y, route) {
        this.y = y;
        this.route = route;
        this.STTCauHoi = 0;
    }
    ngOnInit() {
        this.y.getSubjects().subscribe(data => {
            this.listMonHoc = data;
            // console.log(`${JSON.stringify(this.listMonHoc)}`)
        });
        this.route.paramMap.subscribe(params => {
            this.username = params.get('username');
        });
    }
};
TrangchuComponent.ctorParameters = () => [
    { type: _service_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
TrangchuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trangchu',
        template: __webpack_require__(/*! raw-loader!./trangchu.component.html */ "./node_modules/raw-loader/index.js!./src/app/trangchu/trangchu.component.html"),
        styles: [__webpack_require__(/*! ./trangchu.component.css */ "./src/app/trangchu/trangchu.component.css")]
    })
], TrangchuComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nguyenkhang pc\Music\FullAssignment\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map