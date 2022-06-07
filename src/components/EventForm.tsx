import React, {FC, useState} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";
import FormItem from "antd/es/form/FormItem";
import {IUser} from "../pages/models/IUser";
import {IEvent} from "../pages/models/IEvent";
import {Moment} from "moment";
import {formatDate} from "../utils/date";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface EventFormProps {
    guests: IUser[],
    submit: (event: IEvent) => void
}


const EventForm: FC<EventFormProps> = (props) => {

    const [event, setEvent] = useState<IEvent>({
        author: '',
        date: '',
        description: '',
        guest: ''
    } as IEvent)

    const {user} = useTypedSelector(state => state.auth)

    const selectDate = (date: Moment | null) => {
        if (date) {
            setEvent({...event, date: formatDate(date?.toDate())})
        }
    }

    const submitForm = () => {
        props.submit({...event, author: user.username})
    }

    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="Description of the event"
                name="description"
                rules={[rules.required()]}
            >
                <Input
                    onChange={e => setEvent({...event, description: e.target.value})}
                    value={event.description}
                />
            </Form.Item>
            <Form.Item
                label="Date of the event"
                name="date"
                // rules={[rules.required(), rules.isDateAfter('you can\'t create an event in the past')]} Last 2 minutes is Error


            >

                <DatePicker
                    onChange={date => selectDate(date)}

                />
                    <FormItem
                    label={'Select User'}
                    name={'username'}
                    >
                        <Select onChange={(guest: string) => setEvent({...event, guest})}>
                            {props.guests.map(guest =>
                                <Select.Option key={guest.username} value = {guest.username}>
                                    {guest.username}
                                </Select.Option>
                            )}
                        </Select>
                    </FormItem>
                <Row justify='end'>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" >
                            Create
                        </Button>
                    </Form.Item>
                </Row>
            </Form.Item>

        </Form>
    );
};

export default EventForm;