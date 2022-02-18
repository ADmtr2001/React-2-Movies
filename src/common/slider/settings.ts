export const Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 3,
  draggable: false,
  centerMode: true,
  responsive: [
    {
      breakpoint:1500,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 1160,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}