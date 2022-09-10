import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggle } from '../../app/features/slices/modalSlice'
import styles from "../../styles/modal/PhotoModal.module.scss"


export default function PhotoModal({show}) {

  let locations = [
    "iraq, baghdad", "iraq, erbil", "iraq, najaf", "iraq, karbala",
    "iraq, al-anbar", "iraq, duhoc", "iraq, zakho", "egypt, cairo",
    "egypt, alexandria", "turkey, istanbul", "turkey, antalia", 
    "turkey, alania", "netherlands, amsterdam", "italy, rome",
    "spain, madrid"
  ].sort();
  
  const dispatch = useDispatch()
  const [tags, setTags] = useState([])
  const [suggestions, setSuggestions] = useState([])
  const [inputValue, setInputValue] = useState("")


  const closeModal = () => {
    dispatch(toggle())
    window.document.body.style.overflowY = "scroll"
  }

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return 
    const inputValue = e.target.value
    if (!inputValue.trim()) return 
    // add the current tag the old list of tags
    setTags([...tags, inputValue])
    // clear the input
    e.target.value = ""
  }

  const removeTag = (index) => {
    setTags(tags.filter((tag, i) => i !== index))
  }

  const removeLocation = () => {
    setInputValue("")
  }

  const handleLocation = (e) => {
    let userSuggestions = []
    if (e.target.value !== "") {
      setInputValue(e.target.value)
      locations.map((location) => {
        if (location.startsWith(e.target.value) || location.includes(e.target.value)) userSuggestions.push(location)
      })
    }
    setSuggestions(userSuggestions)
  }

  console.log(inputValue)

  const addSuggestion = (suggestion) => {
    setInputValue(suggestion)
    setSuggestions([])
  }

  return (
    show &&
    <div className={styles.modal} id="wrapper-modal">
      <span className={styles.close} onClick={closeModal}>&times;</span>
      <div className={styles.photoModal}>
        <div className={styles.modalContent}>
          
          <div className={styles.top}>
            <p>Submit to unsplash</p>
            <p>Need help?</p>
          </div>

          <div className={styles.frame} id="frame">
            <form autoComplete="off">

              {/* 
              <div className={styles.imgSection} id="img-section">
                <label>
                  <img src="https://cdn-icons-png.flaticon.com/512/3772/3772243.png" className={styles.uploadIcon} id="upload-icon" />
                  <input id="inputTag" type="file" />
                  <p id="text">Browse to choose a file</p>
                </label>
              </div>
              */}

              <div className={styles.inputsSection}>

                <label>Tags (Maximum 5 tags):</label>
                <div className={styles.tags}
                style={{"border": tags.length > 5 ? "1px solid red" : "2px solid #ccc"}}
                >
                  {
                    tags.map((tag, index) => (
                      <div className={styles.tagItem} key={index}>
                        <span className={styles.text}>{tag}</span>
                        <span className={styles.removeText} 
                          onClick={() => removeTag(index)}>&times;
                        </span>
                      </div>
                    ))
                  } 
                  <input type="text" onKeyDown={handleKeyDown} placeholder="Add tag" />
                  <label>5</label>
                </div>

                <label>Location:</label>
                <div className={styles.locationDiv} 
                  style={{
                    "height": suggestions.length === 0 ? "35px" : "100px",
                    "overflowY": suggestions.length === 0 ? "hidden" : "scroll"
                  }}
                >
                  <input 
                    type="text"
                    value = {inputValue}
                    placeholder="iraq, baghdad" 
                    onChange={handleLocation} 
                    id="location-input"  
                  />
                  {suggestions.length !== 0 && (
                    <ul className={styles.suggestionsList}>
                    {suggestions.map((suggest, index) => (
                      <li key={index} className={styles.suggestItem} 
                          onClick={() => addSuggestion(suggest)}>
                        <i className={styles.icon}></i>
                        <p>{suggest}</p>
                      </li>
                    ))}
                  </ul>
                  )}
                  {
                    inputValue !== "" && (
                      <span 
                        className={styles.clearText} 
                        style={{
                          display: "flex", 
                          justifyContent: "center", 
                          alignItems: "center"
                        }}
                        onClick={removeLocation}
                      >&times;
                      </span>
                    ) 
                  }
                </div>

                <label>Description (Maximum 100 characters):</label>
                <div className={styles.textareaDiv}>
                  <textarea placeholder="Add your description"></textarea>
                  <label>100</label>
                </div>

                <label>Upload an image:</label>
                <input className={styles.uploadFile} type="file" />
              </div>

            </form>
          </div>

          <div className={styles.modalFooter}>
            <a href="!#">Read the unsplash License</a>
            <div className={styles.buttons}>
              <button className={styles.cancelBtn} onClick={closeModal}>Cancel</button>
              <button className={styles.cancelBtn}>Submit</button>
            </div>
          </div>

        </div>
      </div>
  </div>
  )
}
