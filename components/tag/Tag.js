import React from 'react'
import styles from "../../styles/header/Header.module.scss"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

export default function Tag() {

  return (
    <div className={styles.tagsWrapper}>
      <AiOutlineLeft size={18} className={styles.leftArrow} id="left-icon" />
      <div className={styles.allTags}>
        <ul id="tags">
          <li id="tag1">nature</li>
          <li id="tag2">forrest</li>
          <li id="tag3">recipes</li>
          <li id="tag4">train</li>
          <li id="tag5">coding</li>
          <li id="tag6">nature</li>
          <li id="tag7">forrest</li>
          <li id="tag8">recipes</li>
          <li id="tag9">train</li>
          <li id="tag10">coding</li>
          <li id="tag11">nature</li>
          <li id="tag12">forrest</li>
          <li id="tag13">recipes</li>
          <li id="tag14">train</li>
          <li id="tag15">coding</li>
          <li id="tag16">nature</li>
          <li id="tag17">forrest</li>
          <li id="tag18">recipes</li>
          <li id="tag19">train</li>
          <li id="tag20">coding</li>
        </ul>
      </div>
      <AiOutlineRight size={18} className={styles.rightArrow} id="right-icon" />
    </div> 
  )
}
