import {action, makeObservable, observable} from 'mobx';
import {Network} from '../source/Network';

class NoteStore {
  constructor() {
    (this.listOfItems = []),
      (this.title = ''),
      (this.completeTask = false),
      (this.id = ''),
      (this.done = false),
      (this.itemId = ''),
      (this.itemTitle = ''),
      (this.color = 'white'),
      (this.visible = false),
      (this.aceept = false),
      (this.editTitle = ''),
      makeObservable(this, {
        done: observable,
        color: observable,
        listOfItems: observable,
        title: observable,
        id: observable,
        itemId: observable,
        itemTitle: observable,
        editTitle: observable,
        visible: observable,
        aceept: observable,
        completeTask: observable,
        setListOfItems: action.bound,
        setTitle: action.bound,
        setCompleteTask: action.bound,
        addNewNote: action.bound,
        deleteNote: action.bound,
        acceptChange: action.bound,
        editItem: action.bound,
        setVisible: action.bound,
        setAccept: action.bound,
      });
  }

  setListOfItems() {
    Network('tasks?access_token=', this.id, 'GET').then(result => {
      this.listOfItems = result;
    });
  }

  setCompleteTask(item) {
    if (!item.done) {
      Network(`tasks/${item.id}?access_token=`, this.id, 'PUT', {
        done: true,
        title: item.title,
      });
    } else {
      Network(`tasks/${item.id}?access_token=`, this.id, 'PUT', {
        done: false,
        title: item.title,
      });
    }
    setTimeout(this.setListOfItems, 200);
  }

  setTitle(text) {
    this.title = text;
  }

  editItem(text) {
    this.editTitle = text;
  }

  acceptChange(id) {
    Network(`tasks/${id}?access_token=`, this.id, 'PUT', {
      title: this.editTitle,
    });
    setTimeout(this.setListOfItems, 200);
    this.setVisible(false);
    this.itemTitle = '';
    this.editTitle = '';
  }

  setVisible(state, id, title) {
    this.editTitle = '';
    this.visible = state;
    this.itemId = id;
    this.itemTitle = title;
  }

  setAccept(state) {
    this.aceept = state;
  }

  addNewNote() {
    Network('tasks?access_token=', this.id, 'POST', {title: this.title});
    setTimeout(this.setListOfItems, 200);
    this.setTitle('');
  }

  deleteNote(id) {
    Network(`tasks/${id}?access_token=`, this.id, 'DELETE');
    setTimeout(this.setListOfItems, 200);
  }
}

export const StoreToDo = new NoteStore();
