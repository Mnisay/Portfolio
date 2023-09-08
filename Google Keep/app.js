// Third party id:(https://cdnjs.com/libraries/cuid/1.3.8)

class Note { 
    constructor(id, title, text) {
    this.id = id;
    this.title = title;
    this.text = text;
    }
}

class App {
    constructor() {
        this.notes = []

        this.$activeForm = document.querySelector(".active-form");
        this.$inactiveForm = document.querySelector(".inactive-form");
        this.$noteTitle = document.querySelector("#note-title");
        this.$noteText = document.querySelector("#note-text");
        this.$notes = document.querySelector(".notes");
        this.$form = document.querySelector("#form");
        this.$modal = document.querySelector(".modal");

        this.addEventListeners ();
    }
        addEventListeners() {
            document.body.addEventListener("click", (event) => {
                this.handleFormClick(event);
                this.openModal(event);
                this.closeModal(event);
            })
        
            this.$form.addEventListener("submit", (event) => {
                event.preventDefault();
                const title = this.$noteTitle.value;
                const text = this.$noteText.value;
                this.addNote({ title, text });
                this.closeActiveform();
            });
        
        }
    
        handleFormClick(event) {
            const isActiveFormClickedOn = this.$activeForm.contains(event.target);
            const isInactiveFormClickedOn = this.$inactiveForm.contains(event.target);
            const title = this.$noteTitle.value;
            const text = this.$noteText.value;
            
            if(isInactiveFormClickedOn) {
                this.openActiveForm();
            }
            else if (!isInactiveFormClickedOn && !isActiveFormClickedOn) {
                this.addNote({ title, text });
                this.closeActiveform();
            }
                const isModalFormClickedOn = this.$modalForm.contains(event,target)
                if(isModalFormClickedOn) {
                    this.closeModal
                }
            }
        

        openActiveForm() {
            this.$inactiveForm.document.body.style.display = "none";
            this.$activeForm.document.body.style.display = "block";
            this.$noteText.focus();
        }
        closeActiveForm() {
            this.$activeForm.document.body.style.display = "none";
            this.$InactiveForm.document.body.style.display = "block";
            this.$noteText,value = "";
            this.$noteTitle,value = "";
        }
    
        openModal(event) {
            if(event.target.closest(".note")) {
                this.$modal.classList.add("open-modal");
            }
        }
        closeModal(event) {
            const isModalFormClickedOn = this.$modalForm.contains(event,target);
            if(!isModalFormClickedOn && this.$modal.classList.contains(open-modal)) {
                this.$modal.classList.remove("open-modal");
            }
        }
     

    addNote ({title, text}) {
        if(text != "") {
        const newNote = newNote(cuid(), title, text);
        this.notes = [...this.notes, newNote];
        this.displayNotes();
       }
    }

    editNote(id, {title, text }) {
        this.notes = this.notes.map((note) => {
            if (note.id == id) {
                note.title = title = title;
                note.text = text;
            }
        return note;
        });
    }

    deleteNote(id) {
        this.notes = this.notes.filter((note) => note.id != id);
    }

    handleMouseOverNote(element) {
        console.log("MOUSE OVER",element.id);
        const note = document.querySelector("#"+element.id);
        const $checkNote = $note.querySelector(".checkNote");
        const $noteFooter = $note.querySelector(".note-footer")
        
        $checkNote.style.visibility = "visible";
        $noteFooter.style.visibility = "visible";
        console.log($note);
    }
    handleMouseOutNote(element) {
        console.log("MOUSE OUT",element.id);
    }
    displayNotes() {
        this.$notes.innerHTML = this.notes = this.note.filter((note) => 
        `
        <div class="note" id="${note.id}" onmouseover="app.handleMouseOverNote(this)" onmouseout="app.handleMouseOverNote(this)">
                      <span class="material-symbols-outlined check-circle">check_circle</span>
                    <span class="title">${note.title}</span>
                    <span class="text">${note.text}</span>
                    <div class="note-footer">
                        <div class="tooltip">
                            <span class="material-symbols-outlined hover">add_alert</span>
                            <span class="tooltip-text">Remind Me</span>
                    </div>
                        <div class="tooltip">
                            <span class="material-symbols-outlined hover">person_add</span>
                            <span class="tooltip-text">Collaborator</span>
                    </div>
                        <div class="tooltip">
                            <span class="material-symbols-outlined hover">palette</span>
                            <span class="tooltip-text">Backgound options</span>
                     </div>
                        <div class="tooltip">
                            <span class="material-symbols-outlined hover">image</span>
                            <span class="tooltip-text">Add Image</span>
                    </div>
                        <div class="tooltip">
                            <span class="material-symbols-outlined hover">archive</span>
                            <span class="tooltip-text">Archive</span>
                    </div>
                        <div class="tooltip">
                            <span class="material-symbols-outlined hover">more_vert</span>
                            <span class="tooltip-text">More</span>
                     </div>
                     </div>
        `
        ).join("");
    }
        }
    

        
const app = new App()

