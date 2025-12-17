// Function to update avatar
function updateAvatar() {
    const name = $('#nameid').val() || "default";
    const style = $('#stylePicker').val();
    const bgColor = $('#bgColorPicker').val()?.replace("#", "");
    const size = $('#sizePicker').val();

    let url = `https://api.dicebear.com/7.x/${style}/svg?seed=${name}`;

    if (bgColor) 
        url += `&backgroundColor[]=${bgColor}`;

    $("#avatar").attr("src", url);
    $("#avatar").css({ width: size + "px", height: size + "px" });

    animateAvatar();
}


// Generate Button
$("#generateBtn").click(updateAvatar);

// Random Button
$("#randomBtn").click(function () {
    const seed = Math.random().toString(36).substring(2, 10);
    $("#nameid").val(seed);
    updateAvatar();
});

// Download Button
$("#downloadBtn").click(function () {
    const link = document.createElement('a');
    link.href = $("#avatar").attr("src");
    link.download = "avatar.svg";
    link.click();
});

// Animation Function
function animateAvatar() {
    const avatar = document.getElementById("avatar");
    avatar.classList.remove("show");
    setTimeout(() => avatar.classList.add("show"), 50);
}
// DARK / LIGHT MODE TOGGLE
$("#themeToggle").click(function () {
    $("body").toggleClass("light");
});
