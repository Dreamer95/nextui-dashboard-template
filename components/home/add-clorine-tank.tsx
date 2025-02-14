import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  Select,
  SelectItem,
} from '@nextui-org/react';
import React from 'react';
import { useFormik } from 'formik';

interface AddUserProps {
  // eslint-disable-next-line no-unused-vars
  handleSubmitForm?: (data: Record<string, any>) => void;
}

const listWeight = [
  {
    key: 50,
    label: '50kg',
  },
  {
    key: 100,
    label: '100kg',
  },
  {
    key: 500,
    label: '500kg',
  },
];

export const AddClorineTank: React.FC<AddUserProps> = (props) => {
  const { handleSubmitForm } = props;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const formik = useFormik({
    initialValues: {
      code: '',
      ownerId: '',
      expiredDate: '',
      manufacturer: '',
      weight: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      handleSubmitForm?.(values);
      formik.resetForm();
    },
  });

  return (
    <div>
      <>
        <Button onPress={onOpen} color="primary" variant="shadow">
          Thêm bình
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
          backdrop={'blur'}
        >
          <form onSubmit={formik.handleSubmit}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Thêm bình Clo
                  </ModalHeader>

                  <ModalBody>
                    <Input
                      name={'code'}
                      label="Mã bình"
                      value={formik.values.code}
                      onChange={formik.handleChange}
                      variant="bordered"
                      autoComplete="off"
                    />
                    {/*<Input*/}
                    {/*  name={'fullName'}*/}
                    {/*  label="Họ tên"*/}
                    {/*  value={formik.values.ownerId}*/}
                    {/*  onChange={formik.handleChange}*/}
                    {/*  variant="bordered"*/}
                    {/*  autoComplete="off"*/}
                    {/*/>*/}
                    <Select
                      // className="max-w-xs"
                      name={'weight'}
                      label="Trọng lượng"
                      placeholder="Chọn"
                      selectedKeys={[formik.values.weight]}
                      variant="bordered"
                      onChange={formik.handleChange}
                    >
                      {listWeight.map((item) => (
                        <SelectItem key={item.key}>{item.label}</SelectItem>
                      ))}
                    </Select>
                    {/*<Input*/}
                    {/*  name={'address'}*/}
                    {/*  label="Địa chỉ"*/}
                    {/*  value={formik.values.address}*/}
                    {/*  onChange={formik.handleChange}*/}
                    {/*  variant="bordered"*/}
                    {/*  autoComplete="off"*/}
                    {/*/>*/}
                    {/*<Input*/}
                    {/*  name={'phoneNumber'}*/}
                    {/*  label="Số điện thoại"*/}
                    {/*  value={formik.values.phoneNumber}*/}
                    {/*  onChange={formik.handleChange}*/}
                    {/*  variant="bordered"*/}
                    {/*  autoComplete="off"*/}
                    {/*/>*/}
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
