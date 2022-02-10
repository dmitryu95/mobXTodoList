import { action, makeObservable, observable } from "mobx"
import { logIfNoNativeHook } from "react-native/Libraries/Utilities/RCTLog"
import { Network } from "../source/Network"
import { Store } from "../stores/emailPasswordStore"

class NoteStore {
    constructor() {
        this.listOfItems= [""],
        this.title="",
        this.completeTask= false,
        this.id = ''
        makeObservable(this, {
            listOfItems: observable,
            title: observable,
            id: observable,
            setId: action.bound,
            completeTask: observable,
            setListOfItems: action.bound,
            setTitle: action.bound,
            setCompleteTask: action.bound,
            addNewNote: action.bound,
            deleteNote: action.bound,
            // onChangetitle: action.bound
        })
    }

    setId(id) {
        this.id = id
        console.log("SetId", this.id);
    }

    setListOfItems() {
        this.listOfItems = Network("tasks?access_token=",this.id, "GET")
        console.log("из массива туду листа",this.listOfItems)
        console.log("айдиха", this.id);
    }

    setCompleteTask() {

    }

    setTitle(text) {
        this.title = text
    }

    // onChangetitle(text) {
    //     this.title = text
    // }

    addNewNote() {
        console.log("id",this.id);
        Network("tasks?access_token=",this.id, "POST", {"title": this.title})
        console.log("Вот что должно улететь на сервер", this.title);
        this.setListOfItems()
        console.log("а вот что имеем", this.listOfItems)
        // setListOfItems((list) => {
        //     return [
        //       {
        //         title: title,
        //         id: Math.random().toString(36).substr(2),
        //         completeTask: false,
        //       },
        //       ...list,
        //     ];
        //   })
        //   Network(fullUrl, idUser, "POST", {title})
        //   setTitle("");
        this.setTitle("")
    }

    deleteNote() {

    }

}

export const StoreToDo = new NoteStore()