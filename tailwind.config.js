/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'poppins':'Poppins, sans-serif',
         'frank_ruhi':'Frank Ruhl Libre, serif',
         'Podkova':'Podkova, serif'
      },
      screens: {
        'md_lg':'1160px',
        'lg_1300':'1300',
        '2xl': '1440px',
        'xsm' : '360px',
        '916':'920px',         
        
        'max-md_lg': {'max': '1160px'},

        'max-xsm': {'max': '360px'},
        'max-sm':  {'max': '640px'}, 
        'max-md': {'max': '748px'},
        'max-lg': {'max': '1024px'},
        'max-xl': {'max': '1280px'},
        'max-2xl': {'max': '1440px'},
        'max-916':{'max':'920px'},   
      },
    },
  },
  plugins: [],
}

