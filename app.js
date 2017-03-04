var app = new Vue({
   el : '#container',	
	    data: {
		     newNote	: '',
		     Notes 	  : ['This is my First Note, Need to Complete Teemac assignment before 7th March... ']
	    },
	    methods :{
		     addNote() {
			      this.Notes.push(this.newNote);
			      this.newNote = '';
		     }	
	   },
})
