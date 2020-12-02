import React from "react";
import { UseLangContext } from "../../contexts/LangContext";
import LangKeys from '../../constants/langKeys';
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet, View } from 'react-native';


const LanguageSelect = ({ hasHeader }) => {
    const { lang, setLang } = UseLangContext();

    const styles = StyleSheet.create({
        select: {
            position: 'absolute',
            top: hasHeader ? 40 : 16,
            right: hasHeader ? 55 : 20,
            zIndex: 9999,
            width: 78
        }
    });

    return (
        <View style={styles.select}>
            <RNPickerSelect
                value={lang} 
                onValueChange={value => setLang(value)} 
                items={[{ label: 'Português', value: LangKeys.PT }, { label: 'English', value: LangKeys.EN }]} 
            />
        </View>
        
    );
};

export default LanguageSelect;