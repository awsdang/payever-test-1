const header_options = [
    "Vibrant Green Energy",
    "Golden Morning Delight",
    "Decadent Chocolate Indulgence",
   
    "Pastel Macaron Palette"
  ];
  const subheader_options = [
    "69 min. read",
    "7 min. read",
    "8 min. read",
    "3 min. read"
  ];
//   ["#EBB9D2", "#FE9968", "#7FE0EB", "#6CE5B1"]
  const color_options = ["#6CE5B1","#F6EA89", "#FE9968",  "#EBB9D2"];
  const image_options = [
    "https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2955820/pexels-photo-2955820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
   
    "https://images.pexels.com/photos/1346345/pexels-photo-1346345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];
  var i = 0;
  const header = document.getElementById("current-header");
  const subheader = document.getElementById("current-subheader");
  const image = document.getElementById("image");
  const container = document.getElementById("container");
  const menu = document.getElementById("menu");
  const previous = document.getElementById("previous");
  const next = document.getElementById("next");
  
  header.innerText = header_options[i];
  subheader.innerText = subheader_options[i];
  image.style.backgroundImage = "url(" + image_options[i] + ")";
  menu.style.background = color_options[i];
  
  next.onclick = function () {
    i = i + 1;
    i = i % header_options.length;
    header.dataset.nextText = header_options[i];
  
    subheader.dataset.nextText = subheader_options[i];
  
    menu.style.background = color_options[i];
    container.classList.add("anim-next");
    
    setTimeout(() => {
      image.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      header.innerText = header_options[i];
      subheader.innerText = subheader_options[i];
      container.classList.remove("anim-next");
    }, 650);
  };
  
  previous.onclick = function () {
    if (i === 0) {
      i = header_options.length;
    }
    i = i - 1;
    header.dataset.previousText = header_options[i];
  
    subheader.dataset.previousText = subheader_options[i];
  
    menu.style.background = color_options[i];
    container.classList.add("anim-previous");
  
    setTimeout(() => {
      image.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      header.innerText = header_options[i];
      subheader.innerText = subheader_options[i];
      container.classList.remove("anim-previous");
    }, 650);
  };
  