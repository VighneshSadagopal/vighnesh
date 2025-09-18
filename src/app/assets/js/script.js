'use strict';
// Element toggle function
const elementToggleFunc = (elem) => {
    elem.classList.toggle("active");
};
// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
// Sidebar toggle functionality for mobile
if (sidebarBtn && sidebar) {
    sidebarBtn.addEventListener("click", () => {
        elementToggleFunc(sidebar);
    });
}
// Testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
// Modal variables
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
// Modal toggle function
const testimonialsModalFunc = () => {
    if (modalContainer && overlay) {
        modalContainer.classList.toggle("active");
        overlay.classList.toggle("active");
    }
};
// Add click event to all modal items
if (testimonialsItem.length > 0) {
    testimonialsItem.forEach((item) => {
        item.addEventListener("click", function () {
            const avatarImg = this.querySelector("[data-testimonials-avatar]");
            const titleElement = this.querySelector("[data-testimonials-title]");
            const textElement = this.querySelector("[data-testimonials-text]");
            if (modalImg && avatarImg) {
                modalImg.src = avatarImg.src;
                modalImg.alt = avatarImg.alt;
            }
            if (modalTitle && titleElement) {
                modalTitle.innerHTML = titleElement.innerHTML;
            }
            if (modalText && textElement) {
                modalText.innerHTML = textElement.innerHTML;
            }
            testimonialsModalFunc();
        });
    });
}
// Add click event to modal close button
if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", testimonialsModalFunc);
}
if (overlay) {
    overlay.addEventListener("click", testimonialsModalFunc);
}
// Custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
if (select) {
    select.addEventListener("click", function () {
        elementToggleFunc(this);
    });
}
// Add event to all select items
if (selectItems.length > 0) {
    selectItems.forEach((item) => {
        item.addEventListener("click", function () {
            const selectedValue = this.innerText.toLowerCase();
            if (selectValue) {
                selectValue.innerText = this.innerText;
            }
            if (select) {
                elementToggleFunc(select);
            }
            filterFunc(selectedValue);
        });
    });
}
// Filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");
const filterFunc = (selectedValue) => {
    filterItems.forEach((item) => {
        if (selectedValue === "all") {
            item.classList.add("active");
        }
        else if (selectedValue === item.dataset.category) {
            item.classList.add("active");
        }
        else {
            item.classList.remove("active");
        }
    });
};
// Add event to all filter button items for large screen
let lastClickedBtn = filterBtn[0] || null;
if (filterBtn.length > 0) {
    filterBtn.forEach((btn) => {
        btn.addEventListener("click", function () {
            const selectedValue = this.innerText.toLowerCase();
            if (selectValue) {
                selectValue.innerText = this.innerText;
            }
            filterFunc(selectedValue);
            if (lastClickedBtn) {
                lastClickedBtn.classList.remove("active");
            }
            this.classList.add("active");
            lastClickedBtn = this;
        });
    });
}
// Contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");
// Add event to all form input fields
if (formInputs.length > 0 && form && formBtn) {
    formInputs.forEach((input) => {
        input.addEventListener("input", () => {
            // Check form validation
            if (form.checkValidity()) {
                formBtn.removeAttribute("disabled");
            }
            else {
                formBtn.setAttribute("disabled", "");
            }
        });
    });
}
// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");
// Add event to all nav links
if (navigationLinks.length > 0 && pages.length > 0) {
    navigationLinks.forEach((link, linkIndex) => {
        link.addEventListener("click", function () {
            const targetPage = this.innerHTML.toLowerCase();
            pages.forEach((page, pageIndex) => {
                if (targetPage === page.dataset.page) {
                    page.classList.add("active");
                    navigationLinks[pageIndex]?.classList.add("active");
                    window.scrollTo(0, 0);
                }
                else {
                    page.classList.remove("active");
                    navigationLinks[pageIndex]?.classList.remove("active");
                }
            });
        });
    });
}
