
import {Modal, Button} from 'react-bootstrap';

    function AddMovie(props) {
      // function AddMovie({show,onHide})  =====> destructuring
    
        return (
          <Modal
          {...props}
            // show={show} =====> destructuring
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton onClick={props.handleMovie}>
              <Modal.Title id="contained-modal-title-vcenter">
                Add Movie
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{display:'flex', alignItems:'center', justifyContent:'space-between', flexDirection:'column'}}>
            <input placeholder="Movie posterURL" value={props.newMovie.posterURL} type="text" name="img"  onChange={props.handleAddMovie}/>
            <br/>
            <input placeholder="Movie title" value={props.newMovie.title} type="text" name="name" onChange={props.handleAddMovie} />
            <br/>
            <input placeholder="Movie description" value={props.newMovie.description} type="text" name="description" onChange={props.handleAddMovie} />
            <br/>
            <input placeholder="Movie rating" value={props.newMovie.rating} type="number" name="rating" onChange={props.handleAddMovie}/>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.handleMovie} variant="danger">Close</Button>
              <Button onClick={props.addMovie} variant="success">Add Movie</Button> 
            </Modal.Footer>
          </Modal>
        );
      }
      
     
export default AddMovie;









