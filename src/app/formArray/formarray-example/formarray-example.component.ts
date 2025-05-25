import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formarray-example',
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './formarray-example.component.html',
  styleUrl: './formarray-example.component.css'
})
export class FormarrayExampleComponent implements OnInit {

  formArray!: FormGroup;

  private readonly formBuilder = inject(FormBuilder);

  ngOnInit() {
    this.formArray = this.formBuilder.group({
      emailList: this.formBuilder.array([
        this.formBuilder.control('')
      ])
    })
  }


  /**
   * Getter for the emailList control.
   *
   * The emailList control is a FormArray, which is a
   * collection of controls that can be dynamically added
   * or removed.
   *
   * @returns {FormArray} The emailList control.
   */
  get emailList(){
    return this.formArray.get('emailList') as FormArray;
  }

  
  /**
   * Add an email address to the email list.
   *
   * This method adds a control to the emailList control, which
   * is a FormArray. The control is an empty string, ready for the
   * user to input an email address.
   */
addEmail() {
  this.emailList.push(this.formBuilder.control(''));
}


  /**
   * Remove an email address from the email list at the specified index.
   *
   * This method removes a control from the emailList control, which
   * is a FormArray. The control removed is at the position specified
   * by the index parameter.
   *
   * @param {number} index - The zero-based index of the email to remove.
   */

  removeEmail(index:number){
    this.emailList.removeAt(index);
  }
}
