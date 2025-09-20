import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Colors } from '../../constants/colors';
import { Sizes } from '../../constants/sizes';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

export const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      // Show error
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to home or show error
    }, 2000);
  };

  const handleForgotPassword = () => {
    // Navigate to forgot password screen
  };

  const handleRegister = () => {
    // Navigate to register screen
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoIcon}>📱</Text>
        <Text style={styles.logoText}>PhoneShop</Text>
      </View>
      <Text style={styles.welcomeText}>Chào mừng bạn trở lại!</Text>
      <Text style={styles.subtitleText}>
        Đăng nhập để tiếp tục mua sắm
      </Text>
    </View>
  );

  const renderForm = () => (
    <View style={styles.formContainer}>
      <Input
        label="Email"
        placeholder="Nhập email của bạn"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        leftIcon={<Text style={styles.inputIcon}>📧</Text>}
      />

      <Input
        label="Mật khẩu"
        placeholder="Nhập mật khẩu của bạn"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        leftIcon={<Text style={styles.inputIcon}>🔒</Text>}
        rightIcon={
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.inputIcon}>
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </Text>
          </TouchableOpacity>
        }
      />

      <TouchableOpacity
        style={styles.forgotPasswordContainer}
        onPress={handleForgotPassword}
      >
        <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
      </TouchableOpacity>

      <Button
        title="Đăng nhập"
        onPress={handleLogin}
        variant="primary"
        size="large"
        fullWidth
        loading={isLoading}
        style={styles.loginButton}
      />

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>hoặc</Text>
        <View style={styles.divider} />
      </View>

      <Button
        title="Đăng nhập với Google"
        onPress={() => {}}
        variant="outline"
        size="large"
        fullWidth
        icon={<Text style={styles.googleIcon}>🔍</Text>}
        style={styles.googleButton}
      />

      <Button
        title="Đăng nhập với Facebook"
        onPress={() => {}}
        variant="outline"
        size="large"
        fullWidth
        icon={<Text style={styles.facebookIcon}>📘</Text>}
        style={styles.facebookButton}
      />
    </View>
  );

  const renderFooter = () => (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        Chưa có tài khoản?{' '}
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.registerText}>Đăng ký ngay</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {renderHeader()}
          {renderForm()}
          {renderFooter()}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  
  keyboardAvoidingView: {
    flex: 1,
  },
  
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: Sizes.screenPadding,
    paddingVertical: Sizes.lg,
  },
  
  header: {
    alignItems: 'center',
    marginBottom: Sizes.xxl,
    marginTop: Sizes.lg,
  },
  
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Sizes.lg,
  },
  
  logoIcon: {
    fontSize: Sizes.iconXxl,
    marginRight: Sizes.sm,
  },
  
  logoText: {
    fontSize: Sizes.fontSizeLarge,
    fontWeight: '700',
    color: Colors.primary,
  },
  
  welcomeText: {
    fontSize: Sizes.fontSizeXl,
    fontWeight: '700',
    color: Colors.textPrimary,
    textAlign: 'center',
    marginBottom: Sizes.xs,
  },
  
  subtitleText: {
    fontSize: Sizes.fontSizeMd,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: Sizes.lineHeightMd,
  },
  
  formContainer: {
    marginBottom: Sizes.lg,
  },
  
  inputIcon: {
    fontSize: Sizes.iconMd,
  },
  
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: Sizes.lg,
  },
  
  forgotPasswordText: {
    fontSize: Sizes.fontSizeSm,
    color: Colors.primary,
    fontWeight: '600',
  },
  
  loginButton: {
    marginBottom: Sizes.lg,
  },
  
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Sizes.lg,
  },
  
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.border,
  },
  
  dividerText: {
    marginHorizontal: Sizes.md,
    fontSize: Sizes.fontSizeSm,
    color: Colors.textSecondary,
  },
  
  googleButton: {
    marginBottom: Sizes.md,
  },
  
  facebookButton: {
    marginBottom: Sizes.lg,
  },
  
  googleIcon: {
    fontSize: Sizes.iconMd,
    marginRight: Sizes.xs,
  },
  
  facebookIcon: {
    fontSize: Sizes.iconMd,
    marginRight: Sizes.xs,
  },
  
  footer: {
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: Sizes.lg,
  },
  
  footerText: {
    fontSize: Sizes.fontSizeMd,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  
  registerText: {
    color: Colors.primary,
    fontWeight: '600',
  },
});
