import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import React from 'react';
import { useFormik } from 'formik';

interface AddUserProps {
  handleSubmitForm: (data: Record<string, any>) => void;
}

export const AddUser: React.FC<AddUserProps> = (props) => {
  const { handleSubmitForm } = props;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const formik = useFormik({
    initialValues: {
      email: '',
      fullName: '',
      address: '',
      phoneNumber: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      handleSubmitForm(values);
      formik.resetForm();
    },
  });

  return (
    <div>
      <>
        <Button onPress={onOpen} color="primary">
          Thêm khách hàng
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <form onSubmit={formik.handleSubmit}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Thêm khách hàng
                  </ModalHeader>

                  <ModalBody>
                    <Input
                      name={'email'}
                      label="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      variant="bordered"
                      autoComplete="off"
                    />
                    <Input
                      name={'fullName'}
                      label="Họ tên"
                      value={formik.values.fullName}
                      onChange={formik.handleChange}
                      variant="bordered"
                      autoComplete="off"
                    />
                    <Input
                      name={'address'}
                      label="Địa chỉ"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      variant="bordered"
                      autoComplete="off"
                    />
                    <Input
                      name={'phoneNumber'}
                      label="Số điện thoại"
                      value={formik.values.phoneNumber}
                      onChange={formik.handleChange}
                      variant="bordered"
                      autoComplete="off"
                    />
                  </ModalBody>

                  <ModalFooter>
                    <Button color="danger" variant="flat" onClick={onClose}>
                      Đóng
                    </Button>
                    <Button color="primary" type="submit" onPress={onClose}>
                      Thêm
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </form>
        </Modal>
      </>
    </div>
  );
};
