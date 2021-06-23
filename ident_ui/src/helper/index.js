function showSidebar() {
  document.getElementById("menuSidebar").style.width = "300px";
  document
    .getElementById("menuSidebar")
    .addEventListener("transitionend", () => {
      document.body.style.overflow = "hidden";
    });
}
function closeSidebar() {
  const sidebar = document.getElementById("menuSidebar");
  sidebar.style.width = "0";
  sidebar.addEventListener("transitionend", () => {
    if (!sidebar.offsetWidth) {
      document.body.style.overflow = "auto";
    }
  });
}
function toggleSubitem() {
  const subitem = document.getElementById("sidebarSubitem");
  if (subitem.offsetHeight === 0) subitem.style.height = "9em";
  else subitem.style.height = "0";
}
function showAppointmentStatus(status) {
  if (status === "success")
    alert("Thank you! Your appointment was successfully created!");
  else alert("Something went wrong please try again latter");
}
function toggleItem(arr, item) {
  const pos = arr.indexOf(item);
  if (pos === -1) {
    arr.push(item);
  } else {
    arr.splice(pos, 1);
  }
}

export {
  showSidebar,
  closeSidebar,
  toggleSubitem,
  showAppointmentStatus,
  toggleItem,
};
