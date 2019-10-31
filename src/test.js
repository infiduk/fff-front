const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
  <>
    <Button variant="primary" onClick={handleShow}>
      Launch demo modal
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>리매치 신청</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <b>아래 유의사항을 숙지하신 후 신청해주세요.</b>
        <br />
        <br />
        - 리매치는 이전에 진행된 게임의 총 투표 수 절반 이상의 티켓이 기여되어야 진행됩니다.
        <br />
        - 리매치가 진행되면 이전 게임의 기록은 계속 남아있고 새로운 게임으로 다시 시작됩니다.
        <br />
        사용할 티켓 수량을 입력해주세요.
        <Fo
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          취소
        </Button>
        <Button variant onClick={handleClose} style={{ padding: 8, backgroundColor: '#ff9500', borderColor: '#fff' }}>
          확인
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);
}