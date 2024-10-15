"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import style from '@/styles/preferences.module.css';
import { fetchSources } from "@/services/newsApi";
import { fetchCategories, savePreferences, getPreferences } from "@/services/localApi";
import ErrorMessage from "@/components/errorMessage";
import Title from "@/components/title";
import { IoCheckmarkOutline } from "react-icons/io5";

export default function Preferences() {
  const [sources, setSources] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSources, setSelectedSources] = useState([]);
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState()

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetchCategories();
        setCategories(response);
      } catch (error) {
        setErrorMessage(error.message)
      }
    };

    const loadPreferences = async () => {
      try {
        const preferences = await getPreferences();
        setSelectedCategories(preferences.categories || []);
        setSelectedSources(preferences.sources || []);
      } catch (error) {
        setErrorMessage(error.message)
      }
    };

    getCategories();
    loadPreferences();
  }, []);


  useEffect(() => {
    const getSources = async () => {
      const sourcesByCategory = [];

        for (const category of selectedCategories) {
          try {
            const response = await fetchSources(category);
            sourcesByCategory.push({
              title: category,
              sources: response,
            });
          } catch (error) {
            setErrorMessage(error.message)
          }
        }

      setSources(sourcesByCategory);
    };

    getSources();
  }, [selectedCategories]);


  const handleSave = async () => {
    const preferences = { categories: selectedCategories, sources: selectedSources };
  

    if (selectedSources.length < selectedCategories.length) {
      setErrorMessage("Please select at least one source for each category you choose.");
      return;
    }
  
    try {
      await savePreferences(preferences);
      console.log('kaydedildi')
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  
console.log(selectedCategories)
  return (
    <div className="container">
       {errorMessage ? (
        <ErrorMessage message={errorMessage} />
    ) : ( 
      <>
        <Title
          title="Set your preferences"
          buttonName="Save Preferences"
          onClick={handleSave}
        />
        <div className={style.selectContainer}>
          <h4 className={style.title}>Categories</h4>
          <div className={style.selectCards}>
            {categories.map((category) => (
              <div
                key={category.id}
                className={`${style.card} ${selectedCategories.includes(category.id) ? style.selected : ''}`}
                onClick={() => setSelectedCategories((prev) =>
                  prev.includes(category.id)
                    ? prev.filter((c) => c !== category.id)
                    : [...prev, category.id]
                )}
              >
                <input
                  type="checkbox"
                  value={category.id}
                  checked={selectedCategories.includes(category.id)}
                  onChange={(e) => e.stopPropagation()}
                  style={{ display: 'none' }}
                />
                {selectedCategories.includes(category.id) && <IoCheckmarkOutline />}
                <span>{category.name}</span>
              </div>
            ))}
          </div>

          <h4 className={style.title}>News Sources</h4>
          <div>
            {selectedCategories.length === 0&& <p>To choose a news source, please select a category.</p>}
            {sources.map((category) => (
              <div key={category.title}>
                <h5 className={style.subheading}>{category.title}</h5>
                <div className={style.selectCards}>
                  {category.sources.map((source) => (
                    <div
                      key={source.id}
                      className={`${style.card} ${selectedSources.includes(source.id) ? style.selected : ''}`}
                      onClick={() => setSelectedSources((prev) =>
                        prev.includes(source.id) ? prev.filter(s => s !== source.id) : [...prev, source.id]
                      )}
                    >
                      <input
                        type="checkbox"
                        value={source.id}
                        checked={selectedSources.includes(source.id)}
                        onChange={(e) => e.stopPropagation()}
                        style={{ display: 'none' }}
                      />
                      {selectedSources.includes(source.id) && <IoCheckmarkOutline />}

                      {source.name}
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </>
      )}
    </div>

  );
}
