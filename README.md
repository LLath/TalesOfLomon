
<script src='https://cdnjs.cloudflare.com/ajax/libs/tabletop.js/1.5.1/tabletop.min.js'></script>
<script type='text/javascript'> 
	
	
  function init() {
    Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/1kqwdqHWEAbSDSdtm7tDFMSpGqPS5S5IBF_sBjsxOGo4/edit?usp=sharing',
 			callback: showInfo,
			simpleSheet: true } )
  }


function showInfo(data, tabletop) {
    alert('Successfully processed!')
    console.log(data);
}

window.addEventListener(‘DOMContentLoaded’, init)


</script>
