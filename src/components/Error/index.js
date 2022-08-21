import Button from '../Button';

function Error() {
  return (
    <div className='error'>
      <p className='error__text'>
        Some error occured.
        <br />
        Please try again.
      </p>

      <Button text='Reload' onClick={() => window.location.reload()} />
    </div>
  );
}

export default Error;
