export function ConfirmDialog(props) {
  const { open, setOpen, title, children, onConfirm } = props;
  if (!open) {
    return <></>;
  }
  
  return (
    <div className="absolute top-0 left-0 w-screen h-screen z-40 bg-gray-400 bg-opacity-70">
    <Dialog open={open} setOpen={setOpen}>
      <div className="p-5 border-gray-300 border-b-2">{children}</div>
      <div className="flex justify-end">
          <Button
            onClick={() => setOpen(false)}
            className="text-df-oran"
          >
            Cancelar
          </Button>
          <Button
            className=" hover:text-primary"
            onClick={() => {
              setOpen(false);
              onConfirm();
            }}
          >
            Confirmar
          </Button>
      </div>
    </Dialog>
    </div>
  );
}

export function AlertDialog(props) {
  const { open, setOpen, title, children, onConfirm } = props;
  if (!open) {
    return <></>;
  }
  
  return (
    <div className="absolute top-0 left-0 w-screen h-screen z-40 bg-gray-400 bg-opacity-70">
    <Dialog open={open} setOpen={setOpen}>
      <div className="p-5 text-center border-gray-300 border-b-2">{children}</div>
      <div className="flex justify-end">
          <Button
            className=" hover:text-primary"
            onClick={() => {
              setOpen(false);
              onConfirm();
            }}
          >
            Ok
          </Button>
      </div>
    </Dialog>
    </div>
  );
}

export function IconButton(props) {
  const {
    children,
    onClick = (event) => {},
    className = '',
  } = props;
  return (
    <button
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}

export function Dialog(props) {
  const { open, close } = props;
  if (!open) {
    return <></>;
  }
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-80 flex">
      <div className="relative bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
      <div>{props.children}</div>
      {/* <span onClick={() => {close(false)}} >Fechar</span> */}
     </div>
   </div>
 );
}

export function Button(props) {
  const { type = 'button', children, onClick, className = '' } = props;
  return (
    <button
      className={`w-1/2 block text-sm font-semibold py-2 px-4 focus:outline-none focus:shadow-outline hover:bg-gray-200 ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}