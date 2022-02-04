import { action, makeObservable, observable } from "mobx"

class NoteStore {
    constructor() {
        this.listOfItem= "",
        this.title="",
        this.completeTask= false
        makeObservable(this, {
            listOfItem: observable,
            title: observable,
            completeTask: observable,
            setListOfItems: action.bound,
            setTitle: action.bound,
            setCompleteTask: action.bound,
            addNewNote: action.bound,
            deleteNote: action.bound,

        })
    }

    setListOfItems() {

    }

    setTitle() {

    }

    setCompleteTask() {

    }

    addNewNote() {

    }

    deleteNote() {

    }

}

export const store = new NoteStore()