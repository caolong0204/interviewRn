import React, {useImperativeHandle, useRef} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {SCREEN_HEIGHT} from '../../common/constant';
import {ThemeApp} from '../../styles/ThemeApp';
import TextCustom from '../textCustom';

type ActionSheetProps = {
  containerStyle?: ViewStyle;
  headerStyle?: ViewStyle;
  txtHeaderStyle?: ViewStyle;
  bodyStyle?: ViewStyle;
  contentComponent: React.ReactNode;
  title?: string;
  diviceColor?: string;
  hasDevicerHeader?: boolean;
  diviceHeight?: number;
  headerComponent?: React.ReactNode;
};
function ActionSheet(
  {
    containerStyle: style,
    headerStyle,
    txtHeaderStyle,
    bodyStyle,
    contentComponent,
    title,
    headerComponent,
  }: ActionSheetProps,
  ref: any,
) {
  const modalizeRef = useRef<Modalize>(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      modalizeRef.current?.open();
    },
    close: () => {
      modalizeRef.current?.close();
    },
  }));

  return (
    <Portal>
      <Modalize
        adjustToContentHeight={true}
        handlePosition={'outside'}
        withOverlay={true}
        threshold={45}
        ref={modalizeRef}>
        <View style={[styles.container, style]}>
          {headerComponent
            ? headerComponent
            : title && (
                <View style={[styles.headerContainer, headerStyle]}>
                  <TextCustom style={txtHeaderStyle} preset="txtHeader">
                    {title}
                  </TextCustom>
                </View>
              )}
          <View style={[styles.contentView, bodyStyle]}>
            {contentComponent}
          </View>
        </View>
      </Modalize>
    </Portal>
  );
}

export default React.forwardRef(ActionSheet);
const styles = StyleSheet.create({
  container: {
    minHeight: SCREEN_HEIGHT / 2 + 150,
  },
  headerContainer: {
    paddingTop: 26,
    paddingBottom: 16,
    justifyContent: 'center',
  },
  contentView: {
    paddingHorizontal: ThemeApp.paddingHorizontalScreen,
  },
});
