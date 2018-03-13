import ecell from '../images/ecell.jpeg';
import iosd from '../images/iosd.png';
import memegenerator from '../images/memegen.png'
import rgb from '../images/rgb.png'
import susi from '../images/susi.png'
var info = {
  'education':[
    {
      'title':'Delhi Technological University',
      'subTitle':'New Delhi, India',
      'time':'2016-2020',
      'sum':'Pursuing my Bachelors in Engineering Physics with Majors in Electronics',
    },
    {
      'title':'Lovely Public School',
      'subTitle':'New Delhi, India',
      'time':'2002-2016',
      'sum':'Graduated with CGPA 10 in class 10 and 95.2% in class 12.',
    },
  ],
  'por':[
    {
      'title':'IOSD DTU',
      'subTitle':'Co-Head(Mobile Tech.)',
      'time':'2017-Present',
      'sum':'Organise SIGs on ReactJS and open source technologies like Git.',
      'image':iosd
    },
    {
      'title':'E-Cell DTU',
      'subTitle':'Co-Head(Design)',
      'time':'2016-2017',
      'sum':'Made posters for various events of E-Cell DTU. I used Inkscape for editing posters and templates',
      'image':ecell
    },
  ],
  'experience':[
    {
      'title':'Google Code-In - Mentor',
      'subTitle':'FOSSASIA',
      'time':'Nov 2017 - Jan 2018',
      'sum':'Mentoring young students(Age: 13 to 17) in their introduction to open source technologies.',
    },
    {
      'title':'Codeheat - Mentor',
      'subTitle':'FOSSASIA',
      'time':'Aug 2017 - Feb 2018',
      'sum':'Monitored students’ work at Codeheat (Coding marathon where students from all around the globe participate and contribute to open source projects of FOSSASIA). Winners are invited to FOSSASIA Summit in Singapore to talk about their journey.',
    },
    {
      'title':'Google Summer of Code - Intern',
      'subTitle':'FOSSASIA',
      'time':'May 2017 - Aug 2017',
      'sum':'Developed ReactJs based front end for SUSI.AI server. Handled various action types(Map, JSON, table, etc.) from server and displayed data to users as per their queries.',
    },
  ],
  'projects':[
    {
      'title':'MEME GENERATOR',
      'subTitle':'ANDROID',
      'sum':'Cool Application for creating memes with Top and Bottom Text. Different Images can be loaded. This was selected as one of the projects under Winter of Code program by IIT Patna.',
      'github':'https://github.com/madhavrathi/Memegenerator',
      'live':'',
      'image': memegenerator
    },
    {
      'title':'SUSI.AI WEB CHAT FRONTEND',
      'subTitle':'REACTJS',
      'sum':'Susi is an artificial intelligence combining pattern matching, internet data, data flow principles and inference engine principles.SUSI.AI web chat is a front-end that is developed for web access of SUSI.',
      'github':'https://github.com/fossasia/chat.susi.ai',
      'live':'https://chat.susi.ai/',
      'image': susi
    },
    {
      'title':'RGB COLOR GAME',
      'subTitle':'JAVASCRIPT',
      'sum':'This is basically a color guessing game based on javascript. There are two levels of the game : EASY and HARD.',
      'github':'https://github.com/madhavrathi/rgbColourGame',
      'live':'https://madhavrathi.github.io/rgbColourGame/',
      'image': rgb
    },
  ],
  'social':
    {
      'facebook':'https://www.facebook.com/madhav.rathi.9',
      'instagram':'https://www.instagram.com/madhav_rathi/',
      'github':'https://github.com/madhavrathi',
      'twitter':'https://twitter.com/mdhvrthi',
      'linkedin':'https://www.linkedin.com/in/madhav-rathi-120b57129/'
    }
}
export default info;
