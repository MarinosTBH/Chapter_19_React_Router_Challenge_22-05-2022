
import {Modal, Button} from 'react-bootstrap';

    function AddMovie(props) {
      // function AddMovie({show,onHide})  =====> destructuring
    
        return (
          <Modal  {...props}
          class="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton onClick={props.handleMovie}>
            <Modal.Title  id="contained-modal-title-vcenter">
              Add Movie
            </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{display:'flex', alignItems:'center', justifyContent:'space-between', flexDirection:'column'}}>
            <input placeholder="Poster : no svg image" value={props.newMovie.posterURL} type="text" name="img"  height={200} width={200} onChange={props.handleAddMovie}/>
            <input placeholder="Movie title" value={props.newMovie.title} type="text" name="name" onChange={props.handleAddMovie} />
            <input placeholder="Movie rating" max="5" value={props.newMovie.rating} type="number" name="rating" onChange={props.handleAddMovie}/>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={props.handleMovie} variant="secondary">Close</Button>
            <Button onClick={props.addMovie} variant="primary">Add Movie</Button> 
          </Modal.Footer>
        </Modal>
        );
      }
      
     
export default AddMovie;









