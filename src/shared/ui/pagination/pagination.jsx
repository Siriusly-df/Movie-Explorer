import { Button } from "../button";
import "./pagination.scss"

export function Pagination ({ 
    page, 
    totalPages, 
    onNext, 
    onPrevious, 
    className="" 
}) {
   return (
    <div className={`pagination ${className}`}>
      <Button 
        onClick={onPrevious}
        disabled={page === 1}
      >Previous</Button>
      <span className="pagination__info">
        {page} / {totalPages}
      </span>
      <Button
        onClick={onNext}
        disabled={page === totalPages}
      >Next</Button>
   </div>
   )
}