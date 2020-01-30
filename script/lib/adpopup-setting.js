$(document).ready(function() {

  var ads = {
    'ad1': {
      'type': 'image',
      'src': 'http://www.bti.com.tw/Content/images/popup/abanner_02.jpg',
      'link': 'https://www.facebook.com/%E6%98%8E%E8%8F%AF%E7%94%9F%E6%8A%80-Healthy-body-Happy-life-280940597295/'
    },
    // 'ad2': {
    //   'type': 'image',
    //   'src': '../demo/images/pic2.png',
    //   'link': 'http://rikdevos.com'
    // },
    // 'ad3': {
    //   'type': 'image',
    //   'src': '../demo/images/pic3.png',
    //   'link': 'http://rikdevos.com'
    // },
    // 'ad4': {
    //   'type': 'image',
    //   'src': '../demo/images/pic4.png',
    //   'link': 'http://rikdevos.com'
    // },
    // 'ad5': {
    //   'type': 'image',
    //   'src': '../demo/images/pic5.png',
    //   'link': 'http://rikdevos.com'
    // },
    // 'ad6': {
    //   'type': 'image',
    //   'src': '../demo/images/pic6.png',
    //   'link': 'http://rikdevos.com'
    // },
    // 'ad7': {
    //   'type': 'image',
    //   'src': '../demo/images/pic7.png',
    //   'link': 'http://rikdevos.com'
    // }

  }

	  $('body').adPopupPro({
	    ads: ads,
	    width: 600,
      height: 450,
      mobile: false,
      min_screen_size: '700x700',
	  });
  });