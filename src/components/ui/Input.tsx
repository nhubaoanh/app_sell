import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { Colors } from '../../constants/colors';
import { Sizes } from '../../constants/sizes';

export interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  maxLength?: number;
  error?: string;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
  style?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  errorStyle?: TextStyle;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  autoCorrect = false,
  multiline = false,
  numberOfLines = 1,
  maxLength,
  error,
  disabled = false,
  leftIcon,
  rightIcon,
  onRightIconPress,
  style,
  inputStyle,
  labelStyle,
  errorStyle,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputContainerStyle = [
    styles.inputContainer,
    isFocused && styles.inputContainerFocused,
    error && styles.inputContainerError,
    disabled && styles.inputContainerDisabled,
    style,
  ];

  const inputStyles = [
    styles.input,
    multiline && styles.inputMultiline,
    leftIcon && styles.inputWithLeftIcon,
    rightIcon && styles.inputWithRightIcon,
    inputStyle,
  ];

  const labelStyles = [
    styles.label,
    labelStyle,
  ];

  const errorStyles = [
    styles.error,
    errorStyle,
  ];

  return (
    <View style={styles.container}>
      {label && <Text style={labelStyles}>{label}</Text>}
      
      <View style={inputContainerStyle}>
        {leftIcon && (
          <View style={styles.leftIcon}>
            {leftIcon}
          </View>
        )}
        
        <TextInput
          style={inputStyles}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={Colors.textTertiary}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          multiline={multiline}
          numberOfLines={numberOfLines}
          maxLength={maxLength}
          editable={!disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        
        {rightIcon && (
          <TouchableOpacity
            style={styles.rightIcon}
            onPress={onRightIconPress}
            disabled={!onRightIconPress}
          >
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
      
      {error && <Text style={errorStyles}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Sizes.md,
  },
  
  label: {
    fontSize: Sizes.fontSizeSm,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: Sizes.xs,
  },
  
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Sizes.radiusMd,
    paddingHorizontal: Sizes.md,
    minHeight: Sizes.inputHeightMd,
  },
  
  inputContainerFocused: {
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  
  inputContainerError: {
    borderColor: Colors.error,
  },
  
  inputContainerDisabled: {
    backgroundColor: Colors.grayLight,
    opacity: 0.6,
  },
  
  input: {
    flex: 1,
    fontSize: Sizes.fontSizeMd,
    color: Colors.textPrimary,
    paddingVertical: Sizes.sm,
  },
  
  inputMultiline: {
    textAlignVertical: 'top',
    paddingTop: Sizes.sm,
  },
  
  inputWithLeftIcon: {
    marginLeft: Sizes.xs,
  },
  
  inputWithRightIcon: {
    marginRight: Sizes.xs,
  },
  
  leftIcon: {
    marginRight: Sizes.xs,
  },
  
  rightIcon: {
    marginLeft: Sizes.xs,
  },
  
  error: {
    fontSize: Sizes.fontSizeXs,
    color: Colors.error,
    marginTop: Sizes.xs,
    marginLeft: Sizes.xs,
  },
});
