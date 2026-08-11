import { useNavigate } from "react-router-dom";
import { Button } from "../button";
import "./back-button.scss"

export function BackButton({ className="" }) {
    const navigation = useNavigate()
     
    const handleBack = () => {
       navigation(-1)
    }

    return(
      <Button 
        type="button"
        onClick={handleBack}
        className={`back-button ${className}`.trim()}
      >
       ← Back
      </Button>
    )
}