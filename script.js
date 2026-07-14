function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
    ezgif-frame-044.png 
    ezgif-frame-045.png 
    ezgif-frame-046.png 
    ezgif-frame-047.png 
    ezgif-frame-048.png 
    ezgif-frame-049.png 
    ezgif-frame-050.png 
    ezgif-frame-051.png 
    ezgif-frame-052.png 
    ezgif-frame-053.png 
    ezgif-frame-054.png 
    ezgif-frame-055.png 
    ezgif-frame-056.png 
    ezgif-frame-057.png 
    ezgif-frame-058.png 
    ezgif-frame-059.png 
    ezgif-frame-060.png 
    ezgif-frame-061.png 
    ezgif-frame-062.png 
    ezgif-frame-063.png 
    ezgif-frame-064.png 
    ezgif-frame-065.png 
    ezgif-frame-066.png 
    ezgif-frame-067.png 
    ezgif-frame-068.png 
    ezgif-frame-069.png 
    ezgif-frame-070.png 
    ezgif-frame-071.png 
    ezgif-frame-072.png 
    ezgif-frame-073.png 
    ezgif-frame-074.png 
    ezgif-frame-075.png 
    ezgif-frame-076.png 
    ezgif-frame-077.png 
    ezgif-frame-078.png 
    ezgif-frame-079.png 
    ezgif-frame-080.png 
    ezgif-frame-081.png 
    ezgif-frame-082.png 
    ezgif-frame-083.png 
    ezgif-frame-084.png 
    ezgif-frame-085.png 
    ezgif-frame-086.png 
    ezgif-frame-087.png 
    ezgif-frame-088.png 
    ezgif-frame-089.png 
    ezgif-frame-090.png 
    ezgif-frame-091.png 
    ezgif-frame-092.png 
    ezgif-frame-093.png 
    ezgif-frame-094.png 
    ezgif-frame-095.png 
    ezgif-frame-096.png 
    ezgif-frame-097.png 
    ezgif-frame-098.png 
    ezgif-frame-099.png 
    ezgif-frame-100.png 
    ezgif-frame-101.png 
    ezgif-frame-102.png 
    ezgif-frame-103.png 
    ezgif-frame-104.png 
    ezgif-frame-105.png 
    ezgif-frame-106.png 
    ezgif-frame-107.png 
    ezgif-frame-108.png 
    ezgif-frame-109.png 
    ezgif-frame-110.png 
    ezgif-frame-111.png 
    ezgif-frame-112.png 
    ezgif-frame-113.png 
    ezgif-frame-114.png 
    ezgif-frame-115.png 
    ezgif-frame-116.png 
    ezgif-frame-117.png 
    ezgif-frame-118.png 
    ezgif-frame-119.png 
    ezgif-frame-120.png 
    ezgif-frame-121.png 
    ezgif-frame-122.png 
    ezgif-frame-123.png 
    ezgif-frame-124.png 
    ezgif-frame-125.png 
    ezgif-frame-126.png 
    ezgif-frame-127.png 
    ezgif-frame-128.png 
    ezgif-frame-129.png 
    ezgif-frame-130.png 
    ezgif-frame-131.png 
    ezgif-frame-132.png 
    ezgif-frame-133.png 
    ezgif-frame-134.png 
    ezgif-frame-135.png 
    ezgif-frame-136.png 
    ezgif-frame-137.png 
    ezgif-frame-138.png 
    ezgif-frame-139.png 
    ezgif-frame-140.png 
    ezgif-frame-141.png 
    ezgif-frame-142.png 
    ezgif-frame-143.png 
    ezgif-frame-144.png 
    ezgif-frame-145.png 
    ezgif-frame-146.png 
    ezgif-frame-147.png 
    ezgif-frame-148.png 
    ezgif-frame-149.png 
    ezgif-frame-150.png 
    ezgif-frame-151.png 
    ezgif-frame-152.png 
    ezgif-frame-153.png 
    ezgif-frame-154.png 
    ezgif-frame-155.png 
    ezgif-frame-156.png 
    ezgif-frame-157.png 
    ezgif-frame-158.png 
    ezgif-frame-159.png 
    ezgif-frame-160.png 
    ezgif-frame-161.png 
    ezgif-frame-162.png 
    ezgif-frame-163.png 
    ezgif-frame-164.png 
    ezgif-frame-165.png 
    ezgif-frame-166.png 
    ezgif-frame-167.png 
    ezgif-frame-168.png 
    ezgif-frame-169.png 
    ezgif-frame-170.png 
    ezgif-frame-171.png 
    ezgif-frame-172.png 
    ezgif-frame-173.png 
    ezgif-frame-174.png 
    ezgif-frame-175.png 
    ezgif-frame-176.png 
    ezgif-frame-177.png 
    ezgif-frame-178.png 
    ezgif-frame-179.png 
    ezgif-frame-180.png 
    ezgif-frame-181.png 
    ezgif-frame-182.png 
    ezgif-frame-183.png 
    ezgif-frame-184.png 
    ezgif-frame-185.png 
    ezgif-frame-186.png 
    ezgif-frame-187.png 
    ezgif-frame-188.png 
    ezgif-frame-189.png 
    ezgif-frame-190.png 
    ezgif-frame-191.png 
    ezgif-frame-192.png 
    ezgif-frame-193.png 
    ezgif-frame-194.png 
    ezgif-frame-195.png 
    ezgif-frame-196.png 
    ezgif-frame-197.png 
    ezgif-frame-198.png 
    ezgif-frame-199.png 
    ezgif-frame-200.png 
    ezgif-frame-201.png 
    ezgif-frame-202.png 
    ezgif-frame-203.png 
    ezgif-frame-204.png 
    ezgif-frame-205.png 
    ezgif-frame-206.png 
    ezgif-frame-207.png 
    ezgif-frame-208.png 
    ezgif-frame-209.png 
    ezgif-frame-210.png 
    ezgif-frame-211.png 
    ezgif-frame-212.png 
    ezgif-frame-213.png 
    ezgif-frame-214.png 
    ezgif-frame-215.png 
    ezgif-frame-216.png 
    ezgif-frame-217.png 
    ezgif-frame-218.png 
    ezgif-frame-219.png 
    ezgif-frame-220.png 
    ezgif-frame-221.png 
    ezgif-frame-222.png 
    ezgif-frame-223.png 
    ezgif-frame-224.png 
    ezgif-frame-225.png 
    ezgif-frame-226.png 
    ezgif-frame-227.png 
    ezgif-frame-228.png 
    ezgif-frame-229.png 
    ezgif-frame-230.png 
    ezgif-frame-231.png 
    ezgif-frame-232.png 
    ezgif-frame-233.png 
    ezgif-frame-234.png 
    ezgif-frame-235.png 
    ezgif-frame-236.png 
    ezgif-frame-237.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
