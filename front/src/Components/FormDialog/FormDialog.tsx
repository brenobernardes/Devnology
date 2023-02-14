import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export function FormDialog(props:any) {

  
  const handleClose = () => {
    props.setOpen(false);
  };

  //const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Editar</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="id"
            label="Id"
            defaultValue={props.id}
            type="text"
            variant="filled"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Título"
            defaultValue={props.title}
            type="text"
            variant="filled"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="url"
            label="URL"
            defaultValue={props.url}
            type="text"
            fullWidth
            variant="filled"
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Descrição"
            defaultValue={props.description}
            type="text"
            variant="filled"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Salvar</Button>
          <Button variant="outlined" onClick={handleClose}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}