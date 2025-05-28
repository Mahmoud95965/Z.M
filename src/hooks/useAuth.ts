import { useContext } from 'react';
import { AuthContext, AuthContextType } from '../context/AuthContext';

/**
 * Hook للوصول إلى وظائف وبيانات المصادقة في التطبيق
 * 
 * يوفر هذا الـ Hook:
 * - `user`: معلومات المستخدم الحالي (null إذا لم يكن مسجل الدخول)
 * - `loading`: حالة تحميل بيانات المصادقة
 * - `error`: رسائل الخطأ (إن وجدت)
 * - وظائف المصادقة:
 *   - `signInWithGoogle`: تسجيل الدخول باستخدام حساب Google
 *   - `signInWithEmail`: تسجيل الدخول بالبريد الإلكتروني وكلمة المرور
 *   - `signUpWithEmail`: إنشاء حساب جديد
 *   - `resetPassword`: إرسال رابط إعادة تعيين كلمة المرور
 *   - `logout`: تسجيل الخروج
 * 
 * @returns {AuthContextType} كائن يحتوي على حالة وعمليات المصادقة
 * @throws {Error} إذا تم استخدامه خارج نطاق AuthProvider
 * 
 * @example
 * ```tsx
 * function LoginButton() {
 *   const { user, loading, error, signInWithGoogle } = useAuth();
 * 
 *   if (loading) return <Spinner />;
 *   if (error) return <Alert message={error} />;
 * 
 *   return (
 *     <button 
 *       onClick={signInWithGoogle}
 *       disabled={loading}
 *     >
 *       {user ? 'تسجيل خروج' : 'تسجيل دخول مع Google'}
 *     </button>
 *   );
 * }
 * ```
 */
export const useAuth = (): AuthContextType => {
  const context = useContext<AuthContextType | null>(AuthContext);
  
  if (context === null || context === undefined) {
    throw new Error(
      'يجب استخدام useAuth داخل نطاق AuthProvider. ' +
      'تأكد من تغليف المكون الخاص بك باستخدام <AuthProvider>'
    );
  }
  
  return context;
};
