const tl = gsap.timeline({ defaults: { duration: 0.5 }, delay: 1 });

// Step 1
tl.from(".red", { width: 0, height: 0 })
  .from(".green", { width: 0, height: 0 })
  .from(".blue", { width: 0, height: 0 })
  .from(".yellow", { width: 0, height: 0 })

  // Step 2
  .to(".red", {
    x: "100vw",
    xPercent: -100,
    borderRadius: "50%",
    backgroundColor: "green",
    duration: 1,
  })
  .to(
    ".green",
    {
      y: "100vh",
      yPercent: -100,
      borderRadius: "50%",
      backgroundColor: "blue",
      duration: 1,
    },
    "<"
  )
  .to(
    ".blue",
    {
      x: "-100vw",
      xPercent: 100,
      borderRadius: "50%",
      backgroundColor: "yellow",
      duration: 1,
    },
    "<"
  )
  .to(
    ".yellow",
    {
      y: "-100vh",
      yPercent: 100,
      borderRadius: "50%",
      backgroundColor: "red",
      duration: 1,
    },
    "<"
  )

  // Step 3
  .to(".red", {
    x: "100vw",
    xPercent: 100,
    borderRadius: "50%",
    backgroundColor: "green",
  })
  .to(
    ".green",
    {
      x: "100%",
      borderRadius: "50%",
      backgroundColor: "blue",
      duration: 0.25,
    },
    "<"
  )
  .to(
    ".blue",
    {
      x: "-100vw",
      xPercent: -100,
      borderRadius: "50%",
      backgroundColor: "yellow",
    },
    "<"
  )
  .to(
    ".yellow",
    {
      x: "-100vw",
      xPercent: -100,
      borderRadius: "50%",
      backgroundColor: "red",
      duration: 4,
    },
    "<"
  );
