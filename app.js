TweenMax.to(".overlay h1", 2, {
  color: "#ffeb00",
});

TweenMax.to(".overlay p", 2, {
  color: "#494949",
});

TweenMax.to(
  ".overlay",
  4,
  {
    y: "-100%",
    ease: Expo.easeOut,
    delay: 1.5,
  },
  "-=1"
);

TweenMax.from(".nav", 2, {
  opacity: 0,
  x: -20,
});
