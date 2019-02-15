import * as React from 'react';
import block from 'bem-cn';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Form, FormRenderProps } from 'react-final-form';

import { TextInputField, NumberInputField } from 'shared/view/form';
import { Button } from 'shared/view/elements';
import { IAppReduxState } from 'shared/types/app';
import { IProfile } from 'shared/types/models';
import { makeFormFieldNames } from 'shared/helpers';

import { ProfileAvatar } from '../../components';
import { IProfileEditFormFields } from '../../../namespace';
import { actions, selectors } from './../../../redux';

import './ProfileEdit.scss';

interface IStateProps {
  profile: IProfile;
}

interface IActionProps {
  saveProfile: typeof actions.saveProfile;
}

type IProps = IStateProps & IActionProps;

function mapState(state: IAppReduxState): IStateProps {
  return {
    profile: selectors.selectProfile(state),
  };
}

function mapDispatch(dispatch: Dispatch): IActionProps {
  return bindActionCreators({
    saveProfile: actions.saveProfile,
  }, dispatch);
}

const fieldNames = makeFormFieldNames<IProfileEditFormFields>(['age', 'avatarURL', 'bio', 'name', 'nickname']);
const b = block('profile-edit');

function ProfileEdit(props: IProps) {
  return (
    <Form
      onSubmit={handleFormSubmit}
      initialValues={props.profile}
      render={renderForm}
    />
  );
  // TODO: глянуть, мб надо везде fullWidth по дефолту сделать на инпутах
  function renderForm({ handleSubmit }: FormRenderProps) {
    const { profile: { avatarURL } } = props;
    return (
      <form onSubmit={handleSubmit} className={b()}>
        <div className={b('avatar')}>
          <ProfileAvatar avatarURL={avatarURL} size="big" />
        </div>
        <div className={b('fields')}>
          <div className={b('field')}>
            <TextInputField name={fieldNames.name} label="Name" fullWidth />
          </div>
          <div className={b('field')}>
            <TextInputField name={fieldNames.nickname} label="Nickname" fullWidth />
          </div>
          <div className={b('field')}>
            <NumberInputField name={fieldNames.age} label="Age" fullWidth />
          </div>
          <div className={b('field')}>
            <TextInputField name={fieldNames.bio} label="Bio" fullWidth />
          </div>
          <div className={b('button')}>
            <Button variant="outlined" type="submit">Save</Button>
          </div>
        </div>
      </form>
    );
  }

  function handleFormSubmit(values: IProfileEditFormFields) {
    const { saveProfile } = props;
    saveProfile(values);
  }
}

export default connect(mapState, mapDispatch)(ProfileEdit);
