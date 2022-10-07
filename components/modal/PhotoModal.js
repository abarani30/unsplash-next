import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggle } from '../../app/features/slices/modalSlice'
import styles from "../../styles/modal/PhotoModal.module.scss"

export default function PhotoModal({show}) {

  const router = useRouter()
  const { locale } = router
  const { t } = useTranslation("")

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
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")

  const closeModal = () => {
    dispatch(toggle())
    window.document.body.style.overflowY = "scroll"
  }

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return 
    const inputValue = e.target.value
    if (!inputValue.trim()) return 
    // add the current tag the old list of tags
    if (tags.length <= 5) setTags([...tags, inputValue])
    // clear the input
    e.target.value = ""
  }

  const removeTag = (index) => {
    setTags(tags.filter((tag, i) => i !== index))
  }

  const removeLocation = () => {
    setLocation("")
  }

  const handleLocation = (e) => {
    let userSuggestions = []
    if (e.target.value !== "") {
      setLocation(e.target.value)
      locations.map((location) => {
        if (location.startsWith(e.target.value) || location.includes(e.target.value)) userSuggestions.push(location)
      })
    }
    else setLocation("")
    setSuggestions(userSuggestions)
  }

  const addSuggestion = (suggestion) => {
    setLocation(suggestion)
    setSuggestions([])
  }

  const handleDescription = (e) => {
    if (e.target.value !== "") setDescription(e.target.value)
    else setDescription("")
  }

  return (
    show &&
    <div className={styles.modal} id="wrapper-modal">
      <span className={styles.close} onClick={closeModal}>&times;</span>
      <div className={styles.photoModal}>
        <div className={styles.modalContent}>
          
          <div className={styles.top}>
            <p>{t("home.submitToUnsplash")}</p>
            <p>{t("home.needHelp")}</p>
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

                <label className={locale === "en" ? styles.labelEn : styles.labelAr}>{t("home.tags")} ({t("home.noOfTags")}):</label>
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
                  <input type="text" onKeyDown={handleKeyDown} placeholder={locale === "en" ? "Add tag" : "اضف تصنيف"} />
                  <label className={locale === "en" ? styles.numberEn : styles.numberAr}>5</label>
                </div>

                <label className={locale === "en" ? styles.labelEn : styles.labelAr}>{t("home.location")}:</label>
                <div className={styles.locationDiv} 
                  style={{
                    "height": suggestions.length === 0 ? "35px" : "100px",
                    "overflowY": suggestions.length === 0 ? "hidden" : "scroll"
                  }}
                >
                  <input 
                    type="text"
                    value = {location}
                    placeholder="iraq, baghdad" 
                    onChange={handleLocation} 
                    className={locale === "en" ? styles.locInput : styles.locInputAr} 
                  />
                  {suggestions.length !== 0 && (
                    <ul className={styles.suggestionsList}>
                    {suggestions.map((suggest, index) => (
                      <li key={index} className={styles.suggestItem} 
                          onClick={() => addSuggestion(suggest)}>
                        <i className={locale === "en" ? styles.icon : styles.iconAr}></i>
                        <p>{suggest}</p>
                      </li>
                    ))}
                  </ul>
                  )}
                  {
                    location !== "" && (
                      <span 
                        className={locale === "en" ? styles.clearText : styles.clearTextAr} 
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

                <label className={locale === "en" ? styles.labelEn : styles.labelAr}>{t("home.description")} ({t("home.descriptionLength")}):</label>
                <div 
                  className={styles.textareaDiv}
                  style={{"border": description.length > 100 ? "1px solid red" : "2px solid #ccc"}}
                >
                  <textarea 
                    placeholder={locale === "en" ? "Add your description" : "اضف وصف"}
                    onChange={handleDescription}
                    value={description}
                    className={locale === "en" ? styles.description : styles.descriptionAr}
                  />
                  <label className={locale === "en" ? styles.numberEn : styles.numberAr}>100</label>
                </div>

                <label className={locale === "en" ? styles.labelEn : styles.labelAr}>{t("home.uploadImage")}:</label>
                <input className={styles.uploadFile} type="file" />
              </div>

            </form>
          </div>

          <div className={styles.modalFooter}>
            <a href="!#">{t("home.readLicense")}</a>
            <div className={styles.buttons}>
              <button className={styles.cancelBtn} onClick={closeModal}>{t("home.cancel")}</button>
              <button className={styles.cancelBtn}>{t("home.submit")}</button>
            </div>
          </div>

        </div>
      </div>
  </div>
  )
}
