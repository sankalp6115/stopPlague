export function stopPlague() {
    // Disable right-click
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    });

    // Disable F12, Ctrl+Shift+I, Ctrl+U, etc.
    document.addEventListener("keydown", function (e) {
        if (
            e.key === "F12" ||
            (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(e.key.toLowerCase())) ||
            (e.ctrlKey && ["c","u","p","s"].includes(e.key.toLowerCase()))
        ) {
            e.preventDefault();
        }
    });
};

function message(){
    console.log("This site is secured by stopPhishing.js");
    window.alert("This site is secured by stopPhishing.js");
}
