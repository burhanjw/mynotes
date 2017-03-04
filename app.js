var app = new Vue({
	el : '#container',	
	data: {
		operation : 'add',
		Note	: '',
		Notes 	: ['This is my First Note, Need to Complete Teemac assignment before 7th March... '],
		CurrEdit: 0,
	},
	methods :{
		addNote() {
			if(this.Note != ''){			
				this.Notes.push(this.Note);
				this.Note = '';
			}
		},
		editNote(Note) {
			this.Note = Note;		
			this.operation = 'edit';
			this.CurrEdit = this.Notes.indexOf(Note);
		},
		updateNote() {
			if(this.Note != ''){			
				Vue.set(this.Notes, this.CurrEdit , this.Note);			
				this.Note = '';
				this.operation = 'add';
			}
		}
			
	},
	
})
