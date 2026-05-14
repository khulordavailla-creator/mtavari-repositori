function makebad(callback) {
  setTimeout(() => {
    (console.log("making bad"), 2000);
  });
}

function cleandesk(callback) {
  setTimeout(() => {
    console.log("cleaning desk");
    callback();
  }, 3000);
}
function playvideogame(callback) {
  setTimeout(() => {
    (console.log("playing videogame"), callback());
  }, 3000);
}
function sleep(callback) {
  setTimeout(() => {
    console.log("going to sleep");
    callback();
  }, 1000);
}
makebad(() => {
  cleandesk(() => {
    playvideogame(() => {
      sleep();
    });
  });
});
