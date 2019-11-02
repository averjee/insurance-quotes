import { UserModel } from './form.model';
import { DatePipe } from '@angular/common';


export class DataService {
  
  //random 7 digit number
  rand = Math.floor(Math.random() * 10000000);
  timestamp = new Date();

  users: UserModel[] = [new UserModel(this.rand, "REF" + this.rand.toString(), "Joe Bloggs", "1981-02-27", true, 1000, this.timestamp)];
  dataToEdit;
  indexToUpdate;
  getUsers() {
    return this.users;
  }
  addUser(data: UserModel) {
    return this.users.push(data);
  }
  deleteUser(user) {
    return this.users.splice(this.users.indexOf(user), 1);
  }
  editUser(editData, i) {
    this.setIndex(i);
    return this.dataToEdit = editData;
  }
  setIndex(i) {
    return this.indexToUpdate = i
  }

  updateUser(index, user) {
    return this.users.splice(index, 1, user);
  }
}
